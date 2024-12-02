import { info, shToast } from "./toast";

const userName = localStorage.getItem("userName");

// Function to handle tab switching
export function handleTabSwitching() {
	const tabs = document.querySelectorAll('.tabs ul li');
	const contents = document.querySelectorAll('.content');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach(tab => tab.classList.remove('active'));
			tab.classList.add('active');

			contents.forEach(content => content.classList.remove('active-content'));
			contents[index].classList.add('active-content');

			// Update sidebar chapter links based on the active tab
			updateSidebarLinks(tab.id);
		});
	});
}


// Function to render chapters in the sidebar
export function renderChapters(chapters) {
	const chapterList = document.querySelector("#chapter-list");

	chapters.forEach((chapter, index) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.setAttribute("data-chapter", index);
		a.setAttribute("href", "#docs-content"); // Default to Docs tab
		a.setAttribute("class", "side-bar-link");
		a.innerHTML = chapter.title;
		li.appendChild(a);
		chapterList.appendChild(li);
	});
}

// Function to handle scrolling based on the active tab
export function updateSidebarLinks(currentTab) {
	const sidebarLinks = document.querySelectorAll(".side-bar-link");

	sidebarLinks.forEach(link => {
		switch (currentTab) {
			case "docs-tab":
				link.setAttribute("href", "#docs-content");
				break;
			case "practice-tab":
				link.setAttribute("href", "#practice-content");
				break;
			case "notes-tab":
				link.setAttribute("href", "#notes-content");
				break;
			default:
				link.setAttribute("href", "#docs-content"); // Fallback to Docs tab
		}
	});
}

// Function to load content for a selected chapter
export function loadChapterContent(
	index,
	chapters,
	practiceQuestions,
	notes,
	articles
) {
	const chapterTitle = document.getElementById('chapter-title');
	const chapterContent = document.getElementById('chapter-content');
	const chapterCode = document.getElementById('chapter-code');
	const practiceQuestionsList = document.getElementById('practice-questions-list');
	const practiceContent = document.querySelector("#practice-content")
	const notesContent = document.querySelector("#notes-content")
	const notesList = document.getElementById('notes-list');
	const articlesList = document.getElementById('articles-list');
	const chapterLinks = document.querySelectorAll('#chapter-list a');

	const chapter = chapters[index];
	chapterTitle.innerHTML = chapter.title;
	chapterContent.innerHTML = chapter.content;
	chapterCode.textContent = chapter.code?.trim();


	// Add active class in sidebar chapter name
	chapterLinks.forEach(link => link.classList.remove('active'));
	chapterLinks[index].classList.add('active');

	// Check if the user is logged in
	if (userName) {
		// Show the practice tab content
		// practiceContent.style.display = "block";

		// Load practice questions with "Show Solution" feature
		practiceQuestionsList.innerHTML = '';
		practiceQuestions[index].questions.forEach(q => {
			const li = document.createElement('li');
			li.classList.add('practice-question');
			li.innerHTML = `
				<strong>${q.question}</strong><br/>
				<button class="show-solution-btn">Show Solution</button>
				<pre class="solution" style="display: none;"><code>${q.solution}</code></pre>
			`;
			practiceQuestionsList.appendChild(li);

			// Add event listener for "Show Solution" button
			const showSolutionBtn = li.querySelector('.show-solution-btn');
			const solutionBox = li.querySelector('.solution');
			showSolutionBtn.addEventListener('click', () => {
				const isSolutionVisible = solutionBox.style.display === 'block';
				solutionBox.style.display = isSolutionVisible ? 'none' : 'block';
				showSolutionBtn.textContent = isSolutionVisible ? 'Show Solution' : 'Hide Solution';
			});
		});
	} else {
		// Hide the practice tab content and display a message
		// practiceContent.style.display = "none";
		practiceContent.innerHTML = "<p style='color: red; font-size: 16px; font-weight: bold; margin: 10px 20px;'>Please log in to access practice questions.</p>"

	}

	// Load notes
	if (userName) {
		notesList.innerHTML = '';
		notes[index].notes.forEach(note => {
			const li = document.createElement('li');
			li.textContent = note;
			notesList.appendChild(li);
		});
	} else {
		notesContent.innerHTML = "<p style='color: red; font-size: 16px; font-weight: bold; margin: 10px 20px;'>Please log in to access notes.</p>"
		shToast("Click here to log in to access practice questions and notes.", info, "black", "http://localhost:5173/pages/login.html", 0)
	}

	// Load articles
	articlesList.innerHTML = '';
	articles[index].articles.forEach(article => {
		const li = document.createElement('li');
		li.textContent = article;
		articlesList.appendChild(li);
	});
}

// Function to set event listeners for chapter links
export function setChapterLinkListeners(chapters, practiceQuestions, notes, articles) {
	const chapterLinks = document.querySelectorAll('#chapter-list a');
	let currentChapterIndex = 0;

	chapterLinks.forEach((link, index) => {
		link.addEventListener('click', () => {
			loadChapterContent(index, chapters, practiceQuestions, notes, articles);
			currentChapterIndex = index;
		});
	});

	// Load the first chapter by default
	loadChapterContent(currentChapterIndex, chapters, practiceQuestions, notes, articles);
}



