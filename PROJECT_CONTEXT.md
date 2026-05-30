# Project: vhmdevelopers

## Overview
This project is a web application built with the Next.js framework. Based on the workspace structure, it is designed to be a modern, type-safe application.

## Technical Stack
- **Framework:** Next.js
- **Language:** TypeScript
- **Internationalization:** `next-intl` (Support for English `en` and Spanish `es`)
- **API/Data Handling:** Potentially uses AWS Smithy-based services (found `@smithy/types` in dependencies).

## Directory Structure (Standard Next.js)
- `/messages`: Contains JSON translation files (e.g., `en.json`, `es.json`).
- `/app/[locale]`: Localized routes using the App Router.
- `proxy.ts`: Global request interception and i18n routing logic (used instead of middleware.ts).
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