# Study4BITP3423

A browser-based study hub helping UTeM students prepare for Special Topic in Software Engineering tests and exams. Features include lecture summaries, mind maps, structured-question practice, multiple-choice questions, flashcards, and progress tracking.

## Contents

- [Study content](#study-content)
- [Features](#features)
- [Getting started](#getting-started)
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
| 1 | Current Trends & Emerging Technologies | 5 | 15 | 43 | 17 |
| 2 | Ethics & Social Responsibility | 8 | 15 | 35 | 17 |
| 3 | Foundation of Enterprise Architecture | 8 | 15 | 36 | 17 |
| 4 | Advanced Topics in Enterprise Architecture | 8 | 15 | 39 | 17 |
| 5 | Advanced Technologies, Part 1 | 6 | 15 | 40 | 17 |
| 6 | Advanced Technologies, Part 2 | 8 | 15 | 43 | 17 |
| | **Total** | **43** | **90** | **236** | **102** |

Each lecture provides 15 Part A structured questions across three practice sets and two extended Part B case studies. Every subquestion includes an indicative mark allocation, key marking points, and a full suggested answer.

Each lecture contains five sections:

1. **Summary** — notes organised by topic, with slide references.
2. **Mind Map** — an interactive graph with expandable nodes, search, slide notes, and a tree outline.
3. **Structured Practice** — Part A questions and Part B case studies with mark allocations, marking points, full suggested answers, and autosaved response fields.
4. **MCQ Practice** — immediate feedback and an explanation for each answer.
5. **Flashcards** — cards that can be marked as known or needing more practice.

## Features

- Dashboard showing progress across all six lectures
- Search across lecture topics
- Direct links to lecture sections and individual topics
- Overall and per-lecture understanding scores
- Topic reading checkboxes with crossed-out titles and lecture-completion bars
- Lecture switcher and dashboard return button
- Lecture summaries and quick-recall mind maps
- Structured questions and case studies with full suggested answers and marking points
- Multiple-choice practice with immediate feedback
- Flashcards with known and needs-practice states
- Local progress tracking
- Export and import for backing up or transferring progress
- Confirmation dialog before all progress is reset
- Printable study materials
- Last-updated date shown in Malaysia time
- Responsive layout for desktop and mobile screens
- Light and dark themes with your preference remembered across pages

## Getting started

Open the study hub in a modern browser and select a lecture. Use its tabs to read summaries, explore the mind map, practise questions, or review flashcards.

To use a downloaded copy:

1. Download and extract the project.
2. Keep all downloaded files and folders together.
3. Open `index.html` in your browser.

Use the same browser and project location when returning to saved progress.

## Understanding score

Each lecture's understanding percentage is calculated from its complete set of activities:

```text
Understanding % = 20 × (topics marked read ÷ total topics)
                + 40 × (correct MCQs ÷ total MCQs)
                + 20 × (known flashcards ÷ total flashcards)
                + 20 × (reviewed structured questions ÷ total structured questions)
```

Unattempted activities contribute zero. The overall percentage is the average of all six lecture scores.

Lecture completion measures reading separately: check **Read** in each Detailed Summary topic header to cross out its title and save that topic as read. Unchecking reverses it. Each lecture's completion bar is the proportion of its topics marked read; a lecture is fully read when every topic is checked. The overall reading bar counts read topics across all six lectures. Reading progress contributes up to 20 percentage points to understanding, while practice contributes the other 80.

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
|-- index.html       # Main study dashboard
|-- changelog.html   # Site update history
|-- 404.html         # Page-not-found screen
|-- lectures/        # Lecture pages and interactive mind maps
|-- css/             # Page styles, themes, and shared button layouts
|-- js/              # Study content and interactive features
|-- assets/          # Site images
|-- fonts/           # Bundled font and its license
|-- scripts/         # Project maintenance tools
`-- README.md        # Project overview and usage guide
```

## Local data and privacy

Your progress and typed answers are saved in your browser. They are not uploaded to a server.

Saved progress includes topics marked read, MCQ answers, structured-answer drafts, reviewed questions, and flashcard ratings.

Clearing browser storage or using the dashboard's reset option removes saved progress. Progress may also be stored separately when the project is opened from different locations or browsers.

The study hub does not require an internet connection for its learning features or visual assets. The feedback link in the footer is an optional external link and requires internet access when opened.

### Exporting and importing progress

Use **Export progress** on the dashboard to download a backup of your progress across all six lectures, including reading checkboxes and typed answers.

Use **Import progress** to restore a saved backup. You can review and confirm the import before it replaces your current progress. Older backups may not include reading progress.

Keep backup files somewhere private if your typed answers contain personal information.

## Troubleshooting

| Problem | What to try |
|---|---|
| The downloaded site does not open correctly | Extract the full download and open `index.html`. |
| A lecture or part of the page does not load | Refresh the page. For a downloaded copy, keep all files and folders together. |
| Progress is not saved | Use a regular browser window and allow the site to save data. |
| Saved progress disappeared | Return using the same browser and site address, or import a saved backup. |

## Known limitations

- Progress is local to one browser and page location; there is no account or cloud sync.
- Clearing browser storage removes saved progress and structured-answer drafts.
- Some embedded previews may not support every feature. Open the site directly in your browser if needed.
- The optional feedback form requires an internet connection when opened.

## Browser support

Use a current version of Chrome, Edge, Firefox, or Safari. Browser settings that prevent the site from saving data may stop progress from being remembered.

## Content notice

These materials are study aids. Model answers, marking points, worked examples, and explanations should not be treated as an official lecturer answer key. The MCQs are intended only to help users quickly recall key points; they do not represent the actual exam format.

## Feedback

Feedback and suggestions are welcome through the [feedback form](https://forms.gle/fW17FkKTP6RkafSC7).

## Font license

The bundled Rubik font is distributed under the SIL Open Font License. See `fonts/OFL.txt` for the complete license text.
