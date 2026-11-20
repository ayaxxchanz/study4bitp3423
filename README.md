# Study4BITP3423

A browser-based study hub helping UTeM students prepare for Special Topic in Software Engineering tests and exams. Features include lecture summaries, mind maps, structured-question practice, multiple-choice questions, flashcards, and progress tracking.

## Contents

- [Study content](#study-content)
- [Features](#features)
- [Running the project](#running-the-project)
- [Understanding score](#understanding-score)
- [Resetting progress](#resetting-progress)
- [Project structure](#project-structure)
- [Local data and privacy](#local-data-and-privacy)
- [Troubleshooting](#troubleshooting)
- [Known limitations](#known-limitations)
- [Browser support](#browser-support)
- [Content notice](#content-notice)
- [Feedback](#feedback)
- [Font license](#font-license)

## Study content

| # | Lecture | Topics | MCQs | Flashcards | Structured questions |
|---:|---|---:|---:|---:|---:|
| 1 | Current Trends & Emerging Technologies | 12 | 15 | 43 | 17 |
| 2 | Ethics & Social Responsibility | 8 | 15 | 35 | 17 |
| 3 | Foundation of Enterprise Architecture | 10 | 15 | 36 | 17 |
| 4 | Advanced Topics in Enterprise Architecture | 10 | 15 | 39 | 17 |
| 5 | Advanced Technologies, Part 1 | 10 | 15 | 40 | 17 |
| 6 | Advanced Technologies, Part 2 | 12 | 15 | 43 | 17 |
| | **Total** | **62** | **90** | **236** | **102** |

Each lecture provides 15 Part A structured questions across three practice sets and two extended Part B case studies. Every subquestion includes an indicative mark allocation, key marking points, and a full suggested answer.

Each lecture contains five sections:

1. **Summary** — notes organised by topic, with slide references.
2. **Mind Map** — quick-recall groups and a memory-testing mode.
3. **Structured Practice** — Part A questions and Part B case studies with mark allocations, marking points, full suggested answers, and autosaved response fields.
4. **MCQ Practice** — immediate feedback and an explanation for each answer.
5. **Flashcards** — cards that can be marked as known or needing more practice.

## Features

- Dashboard showing progress across all six lectures
- Search across lecture topics
- Direct links to lecture sections and individual topics
- Overall and per-lecture understanding scores
- Lecture switcher and dashboard return button
- Lecture summaries and quick-recall mind maps
- Structured questions and case studies with full suggested answers and marking points
- Multiple-choice practice with immediate feedback
- Flashcards with known and needs-practice states
- Local progress tracking
- Versioned JSON export and import for transferring or backing up progress
- Confirmation dialog before all progress is reset
- Printable study materials
- Fixed last-updated timestamp in Malaysia time
- Responsive layout for desktop and mobile screens

## Running the project

No installation or build process is required.

1. Download or clone the project.
2. Keep the project folders together in their existing structure.
3. Open `index.html` in a modern browser.

The project can also be served by any basic static web server. Use the same browser and project location when returning to saved progress.

## Understanding score

Each lecture's understanding percentage is calculated from its complete set of activities:

```text
Understanding % = 50 × (correct MCQs ÷ total MCQs)
                + 30 × (known flashcards ÷ total flashcards)
                + 20 × (reviewed structured questions ÷ total structured questions)
```

Unattempted activities contribute zero. The overall percentage is the average of all six lecture scores.

| Score | Level |
|---:|---|
| No activity | Not started |
| 0–24% | Getting started |
| 25–49% | Building |
| 50–74% | Developing |
| 75–89% | Strong |
| 90–100% | Exam-ready |

## Resetting progress

Select **Reset All Progress** on the dashboard to open a confirmation dialog. Confirming the reset removes the study hub's saved MCQ answers, structured-answer drafts, structured-question review states, and flashcard ratings for all six lectures.

This action cannot be undone. It does not clear unrelated browser data.

## Project structure

```text
.
├── index.html              # Study dashboard
├── 404.html                # Cloudflare Pages not-found page
├── .gitignore              # Local and generated files excluded from Git
├── _headers                # Cloudflare Pages security headers
├── css/
│   ├── dashboard.css       # Dashboard styles
│   └── lecture.css         # Shared lecture styles
├── fonts/
│   ├── Rubik-Variable.ttf  # Locally bundled font
│   └── OFL.txt             # Font license
├── js/
│   ├── dashboard.js        # Dashboard behavior
│   ├── lecture.js          # Shared lecture behavior
│   └── data/               # Content for each lecture
└── lectures/               # Individual lecture pages
```

The dashboard loads each lecture page in an iframe. Shared styling and behavior are kept in common CSS and JavaScript files, while each lecture's content is stored in its own data file. URL hashes and cross-frame messages handle lecture, section, and topic navigation.

## Local data and privacy

Study progress and structured-answer drafts are stored in the browser using `localStorage`. They are not submitted to a server by the application.

Each lecture stores four categories of data:

- `mcq` — selected MCQ answers
- `structured_answers_v2` — typed answers to structured subquestions
- `structured_reviewed_v2` — structured-question review states
- `flash` — flashcards marked known or needing practice

Clearing browser storage or using the dashboard's reset option removes saved progress. Progress may also be stored separately when the project is opened from different locations or browsers.

The study hub does not require an internet connection for its learning features or visual assets. The feedback link in the footer is an optional external link and requires internet access when opened.

### Exporting and importing progress

Use **Export progress** on the dashboard to download a versioned JSON backup. The file contains progress for all six lectures, including saved structured-answer drafts, and is created entirely in the browser without uploading data anywhere.

Use **Import progress** to select a backup created by this study hub. The application validates its format and values before showing a confirmation. Confirming the import replaces the study hub progress currently stored in that browser. If browser storage fails during the import, the previous progress is restored.

Backup files are not encrypted. Store them somewhere private if structured-answer drafts contain personal information.

## Troubleshooting

| Problem | What to try |
|---|---|
| The page shows a directory or raw code | Open `index.html`, not a CSS, JavaScript, or data file. |
| A lecture does not load | Confirm that the `lectures`, `js`, `css`, and `fonts` folders remain beside `index.html`. |
| Progress is not saved | Open the project directly in a browser, leave private browsing, and allow browser storage. |
| Saved progress disappeared | Use the same browser and project location, and avoid clearing browser storage. |
| The font does not load | Confirm that `fonts/Rubik-Variable.ttf` has not been moved or removed. |

## Known limitations

- Progress is local to one browser and page location; there is no account or cloud sync.
- Clearing browser storage removes saved progress and structured-answer drafts.
- Preview environments that block scripts, iframes, or local storage may not run the project correctly.
- The optional feedback form requires an internet connection when opened.

## Browser support

Use a current version of Chrome, Edge, Firefox, or Safari. Browser settings that block local storage may prevent progress from being saved.

## Content notice

These materials are study aids. Model answers, marking points, worked examples, and explanations should not be treated as an official lecturer answer key. The MCQs are intended only to help users quickly recall key points; they do not represent the actual exam format.

## Feedback

Feedback and suggestions are welcome through the [feedback form](https://forms.gle/fW17FkKTP6RkafSC7).

## Font license

The bundled Rubik font is distributed under the SIL Open Font License. See `fonts/OFL.txt` for the complete license text.
