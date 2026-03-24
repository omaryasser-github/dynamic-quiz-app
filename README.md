# Dynamic Quiz App

## Project Title
Dynamic Quiz Game

## Overview  
This project is a dynamic quiz game built with HTML, CSS, and vanilla JavaScript. It fetches questions from the OpenTDB API, shuffles answers, includes score tracking, and features restart functionality. The project has been refactored from a static implementation to a modular architecture for better maintainability.

## Features
- Dynamic question fetching from OpenTDB API
- Answer shuffling for each quiz
- Score tracking mechanism
- Restart functionality
- Modular architecture

## Tech Stack
- HTML
- CSS
- Vanilla JavaScript

## Project Structure
```
/project
    |-- index.html
    |-- styles.css
    |-- script.js
    |-- /assets
        |-- (images, icons etc.)
```

## How It Works
The game fetches quiz questions from the OpenTDB API. It displays questions to the user and tracks their score as they answer each question. The answers are shuffled to ensure the gameplay remains challenging. Users can restart the game once they complete a quiz.

## Installation and Setup
1. Clone the repository:  
   `git clone https://github.com/omaryasser-github/dynamic-quiz-app.git`
2. Open `index.html` in your browser.

## Usage
To start playing, simply refresh the browser or restart the game via the provided button after finishing a quiz.

## Accessibility Improvements
- Ensured keyboard navigability for users who cannot use a mouse.
- Screen reader support added to make the app usable for visually impaired users.

## Performance Notes
- The application performs efficiently with low latency due to reduced API calls and optimized code.
- Minimal lag during user interaction.

## Future Improvements
- Add more question categories to choose from.
- Implement a timer feature for added challenge.
- Enhance accessibility further by including more ARIA roles and attributes.

## Author
**Omar Yasser** (omaryasser-github)