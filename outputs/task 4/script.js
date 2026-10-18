const announcements = [
  {
    category: "Academic",
    title: "Midterm Examination Schedule",
    description: "Students are reminded to check their respective examination schedules and prepare the necessary requirements.",
    date: "2026-10-20",
    tag: "Student reminder",
    icon: "A"
  },
  {
    category: "Events",
    title: "University Foundation Day",
    description: "All students are invited to participate in the activities prepared for the university's foundation celebration.",
    date: "2026-10-25",
    tag: "Campus event",
    icon: "✳"
  },
  {
    category: "Academic",
    title: "Research Proposal Submission",
    description: "Students enrolled in research courses should submit their proposal drafts to their respective advisers for review.",
    date: "2026-10-28",
    tag: "Academic reminder",
    icon: "A"
  },
  {
    category: "Events",
    title: "Student Research Forum",
    description: "Join fellow students for presentations highlighting current campus research projects and creative work.",
    date: "2026-10-30",
    tag: "Campus event",
    icon: "✳"
  },
  {
    category: "General",
    title: "Library Hours During Examination Week",
    description: "The university library will have extended study hours during examination week. Please bring your student ID when visiting.",
    date: "2026-10-22",
    tag: "Campus services",
    icon: "L"
  },
  {
    category: "General",
    title: "Campus Shuttle Schedule Reminder",
    description: "Students using the campus shuttle are encouraged to check the posted route schedule and arrive at pick-up points on time.",
    date: "2026-10-23",
    tag: "Student reminder",
    icon: "G"
  }
];

const list = document.querySelector("#announcement-list");
const searchInput = document.querySelector("#search-input");
const clearSearchButton = document.querySelector("#clear-search");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const filterButtons = [...document.querySelectorAll(".filter-button")];
let selectedCategory = "All";

function makeAnnouncementCard(announcement, index) {
  const article = document.createElement("article");
  article.className = "announcement-card";

  const mark = document.createElement("span");
  mark.className = `category-mark ${announcement.category.toLowerCase()}`;
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = announcement.icon;

  const content = document.createElement("div");
  const meta = document.createElement("div");
  meta.className = "announcement-meta";

  const category = document.createElement("span");
  category.className = `category-label ${announcement.category.toLowerCase()}`;
  category.textContent = announcement.category;

  const divider = document.createElement("span");
  divider.className = "meta-divider";
  divider.setAttribute("aria-hidden", "true");
  divider.textContent = "·";

  const date = document.createElement("time");
  date.dateTime = announcement.date;
  date.className = "announcement-date";
  date.textContent = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${announcement.date}T12:00:00`));

  meta.append(category, divider, date);
  const title = document.createElement("h3");
  title.textContent = announcement.title;
  const description = document.createElement("p");
  description.textContent = announcement.description;
  const tag = document.createElement("span");
  tag.className = "announcement-tag";
  tag.textContent = announcement.tag;
  content.append(meta, title, description, tag);

  const number = document.createElement("span");
  number.className = "card-index";
  number.setAttribute("aria-hidden", "true");
  number.textContent = String(index + 1).padStart(2, "0");

  article.append(mark, content, number);
  return article;
}

function updateCategoryCounts() {
  document.querySelectorAll("[data-count]").forEach((count) => {
    const category = count.dataset.count;
    const total = category === "All"
      ? announcements.length
      : announcements.filter((item) => item.category === category).length;
    count.textContent = total;
  });
}

function renderAnnouncements() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const filtered = announcements.filter((announcement) => {
    const matchesCategory = selectedCategory === "All" || announcement.category === selectedCategory;
    const searchableText = `${announcement.title} ${announcement.description} ${announcement.category} ${announcement.tag}`.toLocaleLowerCase();
    return matchesCategory && searchableText.includes(query);
  });

  list.replaceChildren(...filtered.map(makeAnnouncementCard));
  list.hidden = filtered.length === 0;
  emptyState.hidden = filtered.length !== 0;
  const label = filtered.length === 1 ? "announcement" : "announcements";
  resultCount.textContent = `${filtered.length} ${label}`;
  clearSearchButton.hidden = searchInput.value.length === 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;
    filterButtons.forEach((filter) => {
      const isSelected = filter === button;
      filter.classList.toggle("is-active", isSelected);
      filter.setAttribute("aria-pressed", String(isSelected));
    });
    renderAnnouncements();
  });
});

searchInput.addEventListener("input", renderAnnouncements);
document.querySelector("#search-form").addEventListener("submit", (event) => event.preventDefault());

clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  renderAnnouncements();
  searchInput.focus();
});

document.querySelector("#reset-filters").addEventListener("click", () => {
  searchInput.value = "";
  selectedCategory = "All";
  filterButtons.forEach((button) => {
    const isSelected = button.dataset.category === "All";
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
  renderAnnouncements();
  searchInput.focus();
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping = target instanceof HTMLElement
    && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

  if (event.key === "/" && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape" && target === searchInput && searchInput.value) {
    searchInput.value = "";
    renderAnnouncements();
  }
});

updateCategoryCounts();
renderAnnouncements();
