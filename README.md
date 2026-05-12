# Student Profile Directory

A React application that displays a directory of student profiles. Each profile shows the student's name, track, bio, skill level, and active status — with a button to toggle that status in real time.

---

## Features

- View student profiles in a responsive card grid
- Toggle each student between **Active** and **Inactive**
- Color-coded skill level badges (Beginner / Intermediate / Advanced)
- Inactive cards are visually dimmed for quick scanning
- Clean, consistent UI with hover effects

---

## Tech Stack
- **React** (with Hooks)
- **CSS Modules** (per-component stylesheets)
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

---

## Project Structure

```
src/
├── App.js                  # Root component — holds state and student data
├── App.css                 # Global styles and layout
└── components/
    ├── Header.js           # App title and subtitle
    ├── Header.css
    ├── ProfileList.js      # Maps student array → ProfileCard components
    ├── ProfileList.css
    ├── ProfileCard.js      # Individual student card with toggle button
    ├── ProfileCard.css
    ├── Footer.js           # Displays total student count
    └── Footer.css
```

---

## Component Overview

### `App`
The root component. Owns all state and data.

- Stores the student array in `useState`
- Defines `toggleActive(id)` — flips a student's `isActive` field
- Passes data and the toggle function down via props

### `Header`
Purely presentational. Renders the app title and a short subtitle.

### `ProfileList`
Receives the `students` array and `onToggle` function as props.  
Uses `.map()` to render one `ProfileCard` per student. Never hardcodes cards manually.

### `ProfileCard`
Receives a single `student` object and the `onToggle` function as props.

- Displays: name, track, bio, skill level badge, and status
- Uses **conditional rendering** to show "Active" or "Inactive"
- The button label switches between "Activate" and "Deactivate" based on `isActive`
- Calls `onToggle(id)` when the button is clicked

### `Footer`
Receives `totalStudents` as a prop and displays the count.

---

## State Management

State lives entirely in `App.js`:

```js
const [students, setStudents] = useState(initialStudents);
```

The toggle function updates only the targeted student, leaving the rest unchanged:

```js
function toggleActive(id) {
  setStudents((prevStudents) =>
    prevStudents.map((student) =>
      student.id === id
        ? { ...student, isActive: !student.isActive }
        : student
    )
  );
}
```

This function is passed down as a prop through `ProfileList` to `ProfileCard`.

---

## Student Data Shape

Each student object follows this structure:

```js
{
  id: 1,
  name: "Amina",
  track: "Frontend Development",
  bio: "Passionate about building accessible user interfaces with React.",
  skillLevel: "Beginner",   // "Beginner" | "Intermediate" | "Advanced"
  isActive: true,
}
```

The app ships with **7 students**, each with unique data.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- npm (comes with Node)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project folder
cd student-directory

# Install dependencies
npm install
```

### Running the App

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000). The page reloads automatically on file changes.

### Building for Production

```bash
npm run build
```

Outputs an optimized bundle to the `build/` folder.

---

## Key React Concepts Demonstrated

| Concept | Where it's used |
|---|---|
| `useState` | `App.js` — manages the student array |
| Props | Data flows from `App` → `ProfileList` → `ProfileCard` |
| `.map()` rendering | `ProfileList.js` — renders cards dynamically |
| Conditional rendering | `ProfileCard.js` — status label and button text |
| Lifting state up | Toggle function defined in `App`, passed down to cards |
| Component reusability | `ProfileCard` is reused for every student |
