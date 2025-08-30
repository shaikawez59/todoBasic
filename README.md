# Todo App — React + Vite

**Short description (repo description):**
A lightweight Todo app built with React + Vite using the Context API and `localStorage` for persistent, client-side storage.

---

## Overview

A simple and practical Todo application that demonstrates core React concepts (components, state, context) and client-side persistence using `localStorage`. This repo is perfect as a learning project and as the foundation to add more advanced features like authentication, a backend API, drag-and-drop reordering, and more.

### Key ideas covered

* Component-based UI (functional components)
* Local component state and lifting state up
* React Context for shared state
* CRUD operations (Create, Read, Update, Delete)
* Persistence with `localStorage`
* Simple form handling and inline editing

---

## Features (Present)

* Add new todos
* Edit todo text inline
* Toggle todo complete / incomplete
* Delete todos
* Todos persist across browser refreshes using `localStorage`
* State shared via a `TodoContext` for cleaner component communication

---

## Tech stack

* React (Functional components + hooks)
* Vite (dev tooling / bundling)
* Plain CSS (or TailwindCSS if you choose to style with Tailwind later)

---

## Repo short instructions

### Install and run locally

```bash
# Clone the repo
git clone https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
cd <REPO_NAME>

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Serve build locally (optional)
npm run preview
```

### Scripts (from `package.json`)

* `dev` — starts Vite dev server
* `build` — builds production bundle
* `preview` — locally preview production build

---

## Project structure (example)

```
repo-root/
├─ node_modules/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ TodoForm.jsx
│  │  └─ TodoItem.jsx
│  ├─ context/
│  │  └─ TodoContext.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .gitignore
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## How to push this project to GitHub

Replace `<YOUR_USERNAME>` and `<REPO_NAME>` with your values.

```bash
# initialize git (if not already a git repo)
git init

git add .
git commit -m "Initial commit"

git branch -M main

git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git

git push -u origin main
```

**Alternative (using GitHub CLI `gh`)**

```bash
# create repo and push (public)
gh repo create <YOUR_USERNAME>/<REPO_NAME> --public --source=. --remote=origin --push
```

---

## Usage notes & tips

* Use `localStorage` keys consistently (e.g. `todos`) so that your load/save hooks remain simple.
* Validate input to avoid adding empty todos: `if (!text.trim()) return`.
* When updating `localStorage`, always `JSON.stringify` the array; when reading use `JSON.parse` with a safe fallback.

Example loading pattern in `App.jsx`:

```js
const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

---

## Roadmap / Next features (great learning tasks)

1. Filter (All | Active | Completed)
2. Search todos
3. Sort todos (date, alphabetical)
4. Add due dates & overdue highlighting
5. Priority levels and color-coding
6. Categories / tags
7. Drag & drop reorder (e.g. `react-beautiful-dnd`)
8. Dark mode and theming
9. Move persistence to a backend (Node + Express + MongoDB)
10. Authentication (JWT) so multiple users can keep separate todo lists
11. Animations (Framer Motion) for add/remove transitions
12. Export/import JSON for backups

---

## Contributing

Contributions are welcome! If you want to add features or fix bugs:

1. Fork the repo
2. Create a branch: `git checkout -b feat/some-feature`
3. Commit changes: `git commit -m "feat: add ..."`
4. Push and open a pull request

---

## License

This project is free to use. Add a license file if you want to specify one (e.g., `MIT`).

---

## Author / Contact

Your name (edit this) — e.g. `Shaik Awez`.

If you'd like, I can also:

* Generate a ready-to-use `LICENSE` file (MIT, Apache-2.0, etc.)
* Create a `.gitignore` tuned for Node/Vite projects
* Produce a short GitHub repo description and a few badges for the top of the README
* Prepare a polished README with screenshots (if you provide images)

---

*Happy coding — good luck building new features!*

