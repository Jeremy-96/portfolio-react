# 🎨 Developer Portfolio – Design System

This document outlines the **design purpose**, and provides guidelines for the **typography** and **color palette** used in the dark-themed developer portfolio.

---

## 🧭 Design Purpose

The design of this portfolio aims to reflect a clean, modern, and professional developer aesthetic, optimized for readability and clarity. It prioritizes:

- **High contrast** for readability in low-light environments
- **Minimal distractions** with consistent styling
- **Code-first mindset**, featuring monospaced fonts and syntax-friendly visuals
- **Aesthetic utility**, maintaining a balance between form and function

This system is intended to work well for showcasing projects, code, and developer experience across devices.

---

## ✍️ Fonts

### Primary Fonts:

- **Headings:** `Inter`, sans-serif  
  Clean and legible, designed for screen readability. Used for all headings and section titles.

- **Body & Code:** `Fira Code`, monospace  
  A monospaced font ideal for code snippets and body text, especially where code and technical content are highlighted.

### CSS Variables

```css
:root {
	--font-heading: 'Inter', sans-serif;
	--font-body: 'Fira Code', monospace;
}
```

---

## 🌒 Colors

A dark theme optimized for screen display, reducing eye strain and enhancing visual hierarchy.

### Core palette

| Purpose        | Variable Name        | Color Code | Description                           |
| -------------- | -------------------- | ---------- | ------------------------------------- |
| Background     | `--color-bg`         | `#0f1117`  | Very dark gray-blue, almost black     |
| Surface        | `--color-surface`    | `#1c1f26`  | Slightly lighter for cards/sections   |
| Primary Text   | `--color-text`       | `#e6e6e6`  | Light gray for high contrast text     |
| Secondary Text | `--color-text-muted` | `#a0a0a0`  | Medium gray for subtitles, captions   |
| Accent         | `--color-accent`     | `#5ccfe6`  | Light blue/cyan, great for links, UI  |
| Accent 2       | `--color-accent-alt` | `#ffb86c`  | Orange accent for highlights/callouts |
| Error          | `--color-error`      | `#ff5555`  | Red tone for errors or warnings       |

### CSS Variables

```css
:root {
	--color-bg: #0f1117;
	--color-surface: #1c1f26;
	--color-text: #e6e6e6;
	--color-text-muted: #a0a0a0;
	--color-accent: #5ccfe6;
	--color-accent-alt: #ffb86c;
	--color-error: #ff5555;
}
```
