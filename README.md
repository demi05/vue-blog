# Vue Blog Application

A simple blog application built with Vue 3 and Vue Router as part of the AltSchool Frontend Engineering Third Semester Assessment.

The application fetches blog posts from an external API and allows users to navigate between a list of posts and individual post details. It also includes route handling, lazy loading, error boundaries, loading states, and a custom 404 page.

## Features

- Display all blog posts from API
- View individual post details
- Dynamic routing with Vue Router
- Back navigation support
- Custom 404 page for invalid routes
- Lazy loading using dynamic imports
- Suspense fallback for loading states
- Error boundary implementation
- Responsive user interface
- Modern card based layout

## Technologies Used

- Vue 3
- Vue Router
- TypeScript
- Vite
- CSS

## Project Structure

```bash
src
│── components
│   ├── ErrorBoundary.vue
│   └── Loading.vue
│
│── pages
│   ├── Home.vue
│   ├── PostDetail.vue
│   └── NotFound.vue
│
│── router
│   └── index.ts
│
│── services
│   └── api.ts
│
│── App.vue
│── main.ts
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd vue-blog-project
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:5173
```

## Routing

| Route | Description |
|--------|-------------|
| `/` | Displays all blog posts |
| `/post/:id` | Displays selected blog post |
| `*` | Shows custom 404 page |

## API Used

Blog posts were fetched from the provided assessment API.

Endpoints used:

- Get all posts
- Get single post by ID

## Extra Implementations

### Lazy Loading

Routes were lazy loaded using dynamic imports to improve performance.

### Suspense

Vue Suspense was used to display loading states while components are being loaded.

### Error Boundary

A custom error boundary component was created to handle rendering errors gracefully.

### 404 Handling

Unknown routes automatically redirect users to a styled fallback page.

## Screens Included

- Home page
- Post detail page
- Loading state
- Error state
- Not found page

## Author
Leshi Taiwo Oluwademilade

Built for AltSchool Frontend Engineering Karatu 2025 Third Semester Assessment.