# Fer Design System

A design system built with React — design tokens, reusable components, and an interactive showcase.

**[Live Demo →](https://fergb01.github.io/fer-design-system/)**

---

## What's inside

### Design Tokens
Single source of truth for all visual decisions — colors, typography, spacing, shadows, and transitions. Framework-agnostic values consumed via CSS custom properties.

```js
import { colors, typography, spacing } from './src/tokens/tokens.js';

colors.rose[400]          // '#C17B74'
typography.fontSize.base  // '1rem'
spacing[4]                // '1rem'
```

### Components

| Component | Description |
|-----------|-------------|
| `Button`  | 3 variants × 3 sizes, loading state, icon support
| `Badge`   | Semantic status indicators — success, warning, error, info |
| `Input`   | Accessible text input with label, helper text, error state, icon slot |


### ThemeProvider
Light/dark mode context with localStorage persistence and system preference detection.


---

## Project structure

```
fer-design-system/
├── src/
│   ├── tokens/
│   │   └── tokens.js               # All design tokens
│   ├── utils/
│   │   └── ThemeContext.jsx         # Light/dark mode provider
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── Badge/
│   │   │   ├── Badge.jsx
│   │   │   └── Badge.module.css
│   │   ├── Input/
│   │       ├── Input.jsx
│   │       └── Input.module.css
│   ├── App.jsx                      # Interactive showcase
│   ├── showcase.css                 # Global styles
│   ├── index.js                     # Public API 
│   └── main.jsx                     
├── index.html
├── vite.config.js
└── package.json
```

---
## Tech stack

- React 18
- Vite 5
- CSS Modules
- GitHub Actions

