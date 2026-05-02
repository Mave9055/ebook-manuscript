# The Rescue Boat & Other Counter-Narratives

A trauma education and counter-narrative manuscript site exploring addiction, the nervous system, and survival protocols.

## Overview

**The Rescue Boat** is a digital manuscript and educational platform designed to provide a "survival doctrine" for those navigating trauma, addiction, and the nervous system. Unlike traditional approaches that focus on compliance, this project offers translation — reframing trauma responses as biological survival protocols rather than character flaws.

The site is built as a high-performance, single-page application (SPA) optimized for reading and accessibility, serving as the canonical source for the manuscript content.

## Live Site

The manuscript is live and can be accessed at:
[https://mave9055.github.io/ebook-manuscript/](https://mave9055.github.io/ebook-manuscript/)

## Content Structure

The manuscript is organized into four key sections:

| Section | Title | Description |
| :--- | :--- | :--- |
| **Part I** | The Counter-Narratives | Twelve core articles challenging traditional narratives of shame and blame. |
| **Part II** | Technical Appendix | Deep science, neurobiology, and research citations supporting the manuscript. |
| **Part III** | Missing Pieces | Tools and reframes often overlooked by traditional recovery systems. |
| **Part IV** | Resources | Practical protocols, the "26 Laws of Survival," and harm reduction notes. |

## Development & Deployment

### Tech Stack

- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS
- **Routing:** Wouter (configured for GitHub Pages sub-paths)
- **Content:** Markdown-based article system

### Build Instructions

To run the project locally or build for production, ensure you have `pnpm` installed:

1.  **Install Dependencies:**
    ```bash
    pnpm install
    ```

2.  **Local Development:**
    ```bash
    pnpm run dev
    ```

3.  **Build for Production:**
    ```bash
    pnpm run build
    ```
    *Note: The build process automatically generates the `404.html` required for GitHub Pages routing.*

4.  **Type Check:**
    ```bash
    pnpm run check
    ```

### Deployment

The site is deployed to GitHub Pages. The build output in `dist/public` is designed to be served from the `/ebook-manuscript/` base path. Routing for direct article links is handled via a custom `404.html` redirection script.

## Purpose & Audience

This is a **trauma education** site. It is intended for:
- **Survivors & Peers:** To provide a map for naming and understanding their own wiring.
- **Legal Support Staff:** To offer operational reframes for "noncompliance" in court and probation settings.
- **Clinicians & Providers:** To help translate complex physiology into plain, actionable language.

---
*This repository serves as the single source of truth for The Rescue Boat manuscript.*
