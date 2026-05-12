# Project: vhmdevelopers

## Overview
This project is a web application built with the Next.js framework. Based on the workspace structure, it is designed to be a modern, type-safe application.

## Technical Stack
- **Framework:** Next.js
- **Language:** TypeScript
- **API/Data Handling:** Potentially uses AWS Smithy-based services (found `@smithy/types` in dependencies).

## Directory Structure (Standard Next.js)
- `/app`: (Recommended) Contains the routes, layouts, and page components using the App Router.
- `/pages`: (Legacy/Alternative) Contains page components for the Pages Router.
- `/components`: Directory for reusable UI components.
- `/public`: Static assets such as images, icons, and robots.txt.
- `/lib` or `/utils`: Reusable helper functions, API clients, and business logic.
- `/hooks`: Custom React hooks.
- `/styles`: Global styles and CSS modules.

## Development Guidelines
- **Components:** Favor Functional Components and React Hooks.
- **State Management:** Use React Context or standard state management libraries as needed.
- **Styling:** Maintain consistency with the chosen styling solution (e.g., Tailwind CSS or CSS Modules).
- **Type Safety:** Ensure all props and data structures are properly typed with TypeScript.

## AI Assistance Context
When providing code suggestions, adhere to the latest Next.js conventions (React Server Components where applicable) and maintain the established architectural patterns in the codebase.