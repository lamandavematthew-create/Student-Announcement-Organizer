const announcements = [
  {
    id: "midterm-examination-schedule",
    category: "Academic",
    title: "Midterm Examination Schedule",
    description: "Students are reminded to check their respective examination schedules and prepare the necessary requirements.",
    date: "2026-10-20",
    tag: "Student reminder",
    icon: "A"
  },
  {
    id: "university-foundation-day",
    category: "Events",
    title: "University Foundation Day",
    description: "All students are invited to participate in the activities prepared for the university's foundation celebration.",
    date: "2026-10-25",
    tag: "Campus event",
    icon: "✳"
  },
  {
    id: "research-proposal-submission",
    category: "Academic",
    title: "Research Proposal Submission",
    description: "Students enrolled in research courses should submit their proposal drafts to their respective advisers for review.",
    date: "2026-10-28",
    tag: "Academic reminder",
    icon: "A"
  },
  {
    id: "student-research-forum",
    category: "Events",
    title: "Student Research Forum",
    description: "Join fellow students for presentations highlighting current campus research projects and creative work.",
    date: "2026-10-30",
    tag: "Campus event",
    icon: "✳"
  },
  {
    id: "library-hours-examination-week",
    category: "General",
    title: "Library Hours During Examination Week",
    description: "The university library will have extended study hours during examination week. Please bring your student ID when visiting.",
    date: "2026-10-22",
    tag: "Campus services",
    icon: "L"
  },
  {
    id: "campus-shuttle-reminder",
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
const savedStorageKey = "msu-campus-bulletin-saved";
let selectedCategory = "All";
let savedAnnouncementIds = loadSavedAnnouncements();

function loadSavedAnnouncements() {
  try {
    const saved = JSON.parse(localStorage.getItem(savedStorageKey) || "[]");
    if (!Array.isArray(saved) || saved.some((id) => typeof id !== "string")) {
      throw new Error("Saved announcement data has an invalid format.");
    }
    return new Set(saved);
  } catch (error) {
    console.error("Could not load saved announcements:", error);
    return new Set();
  }
}

function persistSavedAnnouncements() {
  try {
    localStorage.setItem(savedStorageKey, JSON.stringify([...savedAnnouncementIds]));
  } catch (error) {
    console.error("Could not save announcement changes:", error);
  }
}

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

  const actions = document.createElement("div");
  actions.className = "card-actions";
  const saveButton = document.createElement("button");
  const isSaved = savedAnnouncementIds.has(announcement.id);
  saveButton.className = `save-button${isSaved ? " is-saved" : ""}`;
  saveButton.type = "button";
  saveButton.dataset.announcementId = announcement.id;
  saveButton.setAttribute("aria-pressed", String(isSaved));
  saveButton.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${announcement.title} ${isSaved ? "from" : "to"} saved announcements`);
  saveButton.title = isSaved ? "Remove from saved" : "Save announcement";
  saveButton.textContent = isSaved ? "♥" : "♡";
  actions.append(saveButton, number);

  article.append(mark, content, actions);
  return article;
}

function updateCategoryCounts() {
  document.querySelectorAll("[data-count]").forEach((count) => {
    const category = count.dataset.count;
    const total = category === "All"
      ? announcements.length
      : category === "Saved"
        ? savedAnnouncementIds.size
        : announcements.filter((item) => item.category === category).length;
    count.textContent = total;
  });
}

function renderAnnouncements() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const filtered = announcements.filter((announcement) => {
    const matchesCategory = selectedCategory === "All"
      || (selectedCategory === "Saved"
        ? savedAnnouncementIds.has(announcement.id)
        : announcement.category === selectedCategory);
    const searchableText = `${announcement.title} ${announcement.description} ${announcement.category} ${announcement.tag}`.toLocaleLowerCase();
    return matchesCategory && searchableText.includes(query);
  });

  list.replaceChildren(...filtered.map(makeAnnouncementCard));
  list.hidden = filtered.length === 0;
  emptyState.hidden = filtered.length !== 0;
  const label = filtered.length === 1 ? "announcement" : "announcements";
  resultCount.textContent = `${filtered.length} ${label}`;
  clearSearchButton.hidden = searchInput.value.length === 0;
  updateCategoryCounts();
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

list.addEventListener("click", (event) => {
  const button = event.target.closest(".save-button");
  if (!button) return;

  const announcementId = button.dataset.announcementId;
  if (savedAnnouncementIds.has(announcementId)) {
    savedAnnouncementIds.delete(announcementId);
  } else {
    savedAnnouncementIds.add(announcementId);
  }
  persistSavedAnnouncements();
  renderAnnouncements();
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
