# JS String Method LabSheet

An interactive browser-based lab for practicing common JavaScript string methods. The app shows a grid of question-and-answer cards, lets you reveal the function used for each example, and displays the output when you run it.

## Features

- 31 string-method practice questions
- Search/filter across questions and code
- Show the function behind each answer
- Run the example and inspect the output instantly
- Responsive layout with Tailwind CSS and custom styling

## Project Structure

- `index.html` - Main page and layout
- `qa.js` - Question data and answer functions
- `script.js` - Renders cards, handles filtering, and wires buttons
- `style.css` - Custom styles layered on top of Tailwind

## How To Run

This is a plain HTML/CSS/JavaScript project, so no build step is required.

1. Open `index.html` in a browser, or
2. Use a local preview server from VS Code if you prefer a live reload workflow.

## How It Works

The questions and sample solutions live in `qa.js` as a `qaList` array. On page load, `script.js` reads that data, renders the cards into the grid, and attaches the button handlers for showing code and running each function.

## Customizing The Lab

- Add, remove, or edit question objects in `qa.js`
- Update the card rendering or filter behavior in `script.js`
- Adjust the visual styling in `style.css`

## Notes

- The page uses the Tailwind CDN, so an internet connection is needed for the default styling.
- The code is designed to be easy to extend with more string-method exercises.
