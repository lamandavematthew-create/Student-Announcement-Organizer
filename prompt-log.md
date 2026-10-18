Student Announcement Organizer
Hands-On Laboratory Activity #4: Prompt, Observe, Refine

Task 1: Sector Selection
Sector: Digital Technology & AI

Project Title: Student Announcement Organizer

Local Challenge:

Students may miss important school announcements because information is scattered across class group chats, social media posts, and classroom notices. This can make it difficult to find updates about deadlines, academic requirements, and school activities.

Target Users:

College students who need a convenient way to organize and access important school announcements.

Proposed Solution:

The Student Announcement Organizer is a responsive, single-page website that collects demonstration announcements in one interface. It allows students to search, filter, and save announcements so they can find important information more easily.

Key Features:

TAnnouncement categories for organizing academic updates, school events, and deadlines.

Search and filtering functionality for finding relevant announcements.

A saved announcements feature for keeping important information accessible.

Expected Output:

A functional frontend prototype built with semantic HTML, CSS, and vanilla JavaScript.

Task 2: Zero-Shot Prompting
Objective: Observe what Copilot generates from a basic prompt without examples.

Exact Prompt:

Create a simple webpage for a Student Announcement Organizer that helps college students keep track of school announcements.

Actual Copilot Output:

The page is now wired to a matching responsive dashboard and includes working category/search filters, saved and read states, and an add-announcement dialog. I’m checking the script syntax and the rendered page next.

What Worked:

The basic prompt generated a responsive Student Announcement Organizer website for college students. It included announcement categories, search and filtering functionality, saved and read states, and an add-announcement dialog. The website was designed to help students organize and access important school updates, such as academic requirements, deadlines, and school activities.

What Needs Improvement:

The prompt did not specify the required features, website structure, or accessibility requirements. Although the initial website had useful content and responsive navigation, it still needed more detailed requirements for interactive features and organized destination information.

Next Action / Verification:

Improve the prompt by specifying the target users, required features, and technical constraints. Inspect the generated HTML and test the website on desktop and mobile screens. Check the navigation links, image loading, and layout before using the initial version as the baseline for comparison.

Task 3: Improve, Anatomy of a Prompt: Role Assignment Prompting
Objective: Improve output relevance using structured prompt components.

Exact Prompt:

Act as a frontend web developer. Create a responsive single-page Student Announcement Organizer for students at Marinduque State University. Include an announcement dashboard, category filtering for Academic, Events, and General announcements, and a search function to help students easily find important school information. Use semantic HTML, CSS, and vanilla JavaScript. Do not use external frameworks, backend services, databases, or external APIs. Use fictional school announcements for demonstration purposes. Provide the required frontend files and implement functional category filters and a search bar that displays announcements based on the selected category or entered keywords. The interface must remain readable and organized on mobile screens, and all interactive elements must work through mouse and keyboard interaction.

Expected Output: Provide index.html, style.css, and script.js. Include a navigation bar, a homepage introduction, tourist destination cards, cultural highlights, and a search and category filter feature.

Acceptance Criteria:

The page displays announcements under Academic, Events, and General categories.

The search bar finds announcements using keywords.

The category filters work together with the search function.

The layout adjusts to mobile screens.

Interactive elements can be used with a mouse or keyboard.

The project uses HTML, CSS, and vanilla JavaScript without a backend or external frameworks.

Actual Copilot Output:

Copilot generated a responsive student bulletin for Marinduque State University using fictional announcements. It created index.html for the page structure, style.css for the design, and script.js for the interactive features. The category filters and search function work together, and the page includes result counts and a message when no announcements match. It also added keyboard support, including a shortcut to focus the search bar and a way to clear the search.

What Worked:

The improved prompt helped Copilot generate a more organized webpage with the features and technologies we specified. The category filters and search function work together, making it easier to find announcements. The page also includes responsive styling and keyboard controls.

What Needs Improvement:

The generated version does not include a feature for saving important announcements. Students can search and filter announcements, but they cannot keep selected announcements in a separate list for easier access.

Next Action / Verification:

For the next experiment, provide examples of the announcement format and ask Copilot to add more entries while keeping the existing design and functionality. After that, check whether all announcements display correctly and plan how to add a save feature without affecting the search and category filters.

Task 4, Experiment A: Few-Shot Prompting
Objective: Provide one or two examples of the expected data or component format.

Exact Prompt:

Using my existing Student Announcement Organizer project, create school announcement entries following the format shown in these examples.

Example 1:

Name: Midterm Examination Schedule

Category: Academic

Date: October 20, 2026

Description: Students are reminded to check their respective examination schedules and prepare the necessary requirements.

Example 2:

Title: University Foundation Day

Category: Events

Date: October 25, 2026

Description: All students are invited to participate in the activities prepared for the university's foundation celebration.

Generate four additional fictional school announcements using the same format and display them in the existing announcement dashboard. Use the categories Academic, Events, and General. Ensure that each announcement contains a title, category, date, and short description. Maintain the existing webpage design and functionality without adding unnecessary features.

Actual Copilot Output:

Copilot added four fictional announcements to the two examples, giving the dashboard six announcements in total. It updated script.js and kept the existing dashboard design, search function, and category filters. The generated entries included titles, categories, dates, and descriptions.

What Worked:

The examples helped Copilot follow a consistent format for the announcements. All six entries were displayed with the required information, and the existing search and category filtering features remained unchanged.

What Needs Improvement:

The website still lacks a save feature for announcements that students want to revisit. Although the announcements are organized and searchable, users cannot save selected items for quick access later.

Next Action / Verification:

Check that all six announcements display correctly and that the search and category filters still work. In the next refinement, ask Copilot to add a save button to each announcement and a separate view for saved announcements. Test whether users can save and remove announcements without affecting the other features.

Task 4, Experiment B: Role Assignment
Objective: Ask Copilot to examine the same interface from a specialized perspective.

Exact Prompt:

Act as a frontend accessibility reviewer. Examine my existing Student Announcement Organizer webpage and identify possible issues involving HTML semantics, keyboard accessibility, search input labels, category filter buttons, and visual readability. Check whether students can easily navigate the announcement dashboard and interact with its features using both mouse and keyboard. Recommend specific improvements to make the interface more accessible and user-friendly without changing the existing design, functionality, or project scope. Explain your findings briefly and identify which improvements should be prioritized.


Actual Copilot Output:

Copilot found that the website already had a good accessibility foundation. It used semantic HTML elements, a properly labeled search field, and category buttons that indicate which category is selected.

However, it recommended three main improvements:

Increase the size of small text and improve the contrast of muted text colors.

Make the keyboard focus indicator on the search field more noticeable.

Reduce repetitive screen-reader announcements when the search results or category filters change.

Copilot also noted that the category buttons support keyboard interaction and that the search shortcut and clear controls were already implemented. These were recommendations only; Copilot did not change the code.

Review Findings:

The website already supports basic keyboard navigation and uses appropriate labels for its search and category controls. However, some text may be difficult to read because of its size and contrast. The search field's focus indicator could also be more visible, and frequent screen-reader announcements could make navigation less convenient.

What Worked:

The accessibility review identified specific areas for improvement without requiring a complete redesign. It also confirmed that several existing features, such as the search label and keyboard-operable category buttons, were already implemented.

What Needs Improvement:

The recommended accessibility changes have not yet been applied or tested. The website also still needs a save feature so students can keep important announcements in a separate list.


Next Action / Verification:

Improve the text contrast and size, strengthen the search field's focus indicator, and review how screen readers announce updated results. Then add the missing save feature. Test the updated website using both a mouse and a keyboard, and confirm that saving or removing an announcement does not interfere with searching or filtering.

Task 5: Structured Analysis and Refinement
Objective: Use AI-assisted analysis to identify and improve a specific implementation weakness.

Technique: Structured Analysis and Refinement.

Exact Prompt:

Review my Student Announcement Organizer. Check whether the interactive checklist works correctly, whether the HTML uses appropriate semantic elements, and whether the interface is usable on mobile screens. Identify the two most important implementation issues based on the provided code. Recommend the smallest appropriate corrections and explain how I can test them.

Add a Save button to each announcement and a Saved filter with a live count.

Actual Copilot Output:

Findings:

Copilot identified two main issues:

Broken stylesheet link. The HTML file linked to style instead of style.css, preventing the browser from loading the correct stylesheet. The suggested correction was to use <link rel="stylesheet" href="style.css">. Copilot recommended reloading the page and checking the layout on both desktop and narrow mobile screens.

Missing interactive checklist. The project contains announcement cards, category filters, and search functionality, but no checklist items or checkbox behavior. Copilot explained that labeled checkboxes and event handlers would be needed if a checklist were actually required.

Copilot also confirmed that the page uses appropriate semantic elements, including header, main, section, article, and time. The category filters use native buttons with pressed states, and the search input has an associated label.

Behavior Checks:

The stylesheet link was identified as needing correction, but the corrected layout still needs to be tested in the browser.

The announcement dashboard has search and category filtering, but the reported output does not confirm that the new Save buttons and Saved filter were implemented.

The checklist behavior could not be tested because the project does not contain checklist controls.

The semantic HTML and existing search and category controls were reviewed by Copilot, but additional manual testing is still needed.

What Worked:

The structured analysis helped identify a specific file-linking problem and clarified that a checklist was not part of the existing announcement dashboard. It also confirmed that the page already uses appropriate semantic elements and accessible controls. The suggested corrections included practical ways to verify the results.

What Needs Improvement:

The Save button and Saved filter with a live count were requested, but the actual output only discussed the two identified issues. It did not confirm that these features were added. The stylesheet correction and mobile layout also still need to be tested to verify that they work as expected.

Next Action / Verification:

Correct the stylesheet link and reload the webpage to confirm that the CSS loads properly and the layout works on mobile screens. Keep the project focused on organizing announcements rather than adding an unrelated checklist. Then refine the prompt to specifically implement a Save button for each announcement and a Saved filter with a live count. Test whether announcements can be saved and removed from the saved list, whether the count updates correctly, and whether saving still works alongside search and category filtering.

Task 6: Compare and Submit
Objective: Evaluate how the prompting techniques influenced the final prototype.

Final Comparison Table
Zero-Shot:

The first prompt gave Copilot a general idea of the Student Announcement Organizer. It was enough to begin creating the webpage, but the results depended on how the AI interpreted the request. This showed me that a short prompt can start a project, although it may not cover all the details I want.

Structured Prompt:

For this technique, I included more specific instructions about the website's purpose, features, and tools to use. The generated page had a clearer structure, with announcement categories, a search bar, and a responsive layout. Giving the AI clear requirements made the result more aligned with my project.

Few-Shot:

I provided sample announcements to show Copilot how each entry should be organized. This helped keep the titles, categories, dates, and descriptions consistent across the dashboard. The existing search and category filters were also retained in the generated output.

Role Assignment:

The accessibility review identified areas for improvement, including text contrast, small text sizes, and keyboard focus visibility. It also confirmed that the webpage already had useful semantic elements, an associated search label, and keyboard-operable category buttons.

Structured Analysis:

Structured analysis identified a broken stylesheet link and the absence of interactive checklist controls. It also confirmed that the existing page uses appropriate semantic HTML. The analysis provided specific testing steps, while the Save button and Saved filter still needed implementation and verification.

Final Reflection

Through this activity, I gained a better understanding of how different prompting techniques can help during web development. I started with a simple request and gradually learned to provide clearer instructions, give examples, assign a specific role to the AI, and ask it to examine problems in the existing code.

Each technique helped in a different way. Structured prompting made the website's requirements clearer, while few-shot prompting helped keep the announcement information organized. The accessibility review and structured analysis also helped me notice issues that might not be obvious just by looking at the webpage.

One important lesson I learned is that getting code from AI does not automatically mean the project is finished. I still need to check the files, test the features, and make sure the webpage works on different screen sizes. I also need to confirm whether the AI actually made the requested changes. Overall, using these techniques helped me approach AI-assisted development more carefully and understand the importance of testing the final output.