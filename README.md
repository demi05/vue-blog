# Vue Blog Application

A simple blog application built with Vue 3 and Vue Router for the AltSchool Frontend Engineering Karatu 2025 Third Semester Assessment.

The application displays blog posts fetched from the provided API and allows users to navigate between a list of posts and individual post pages. Additional features such as lazy loading, suspense handling, error boundaries, custom routing, and deployment configuration were also implemented.

---

## Live Demo

Vercel Deployment:

```text
https://vue-blog-gamma.vercel.app/
```

Repository:

```text
https://github.com/demi05/vue-blog
```

---

## Features

- Fetch and display blog posts from API
- Dynamic post detail pages
- Navigation between pages using Vue Router
- Back button functionality
- Custom 404 page
- Lazy loaded routes
- Suspense fallback while loading components
- Error boundary implementation
- Responsive interface
- Vercel deployment support

---

## Technologies Used

- Vue 3
- Vue Router
- TypeScript
- Vite
- CSS
- Vercel

---

## Folder Structure

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

---

## Installation

Clone the repository:

```bash
git clone https://github.com/demi05/vue-blog
```

Move into project folder:

```bash
cd vue-blog
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

```text
http://localhost:5173
```

---

## Routes

| Route | Description |
|--------|-------------|
| `/` | Displays all blog posts |
| `/post/:id` | Displays selected blog article |
| `/:pathMatch(.*)*` | Custom 404 page |

---

## API Endpoints Used

Posts API was used for the application.

- Fetch all posts
- Fetch single post details

---

## Implemented Concepts

### Vue Router

Routing was implemented to allow navigation between the Home page and individual blog posts.

### Lazy Loading

Components are loaded only when needed using dynamic imports.

```javascript
const Home = () => import("../pages/Home.vue")
```

This helps reduce initial loading time.

### Suspense

Vue Suspense was used to display loading states while asynchronous components are loading.

### Error Boundary

A custom error boundary component was added to catch and display rendering errors gracefully.

### Custom 404 Handling

Unknown routes are redirected to a dedicated Not Found page.

Example:

```text
/random-page
/test
/anything
```

---

## Vercel Deployment Fix

Vue Router uses client side routing. During deployment on Vercel, refreshing or visiting unknown routes directly can result in Vercel showing its own 404 page instead of the application route.

To solve this, a rewrite rule was added.

`vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

This ensures all routes are redirected back to the Vue application before routing is handled internally.

---

## Screenshots

### Home Page

Add screenshot:

<img width="1348" height="605" alt="image" src="https://github.com/user-attachments/assets/90d953f5-c30c-49cb-8594-df4558503fea" />

### Post Detail Page

Add screenshot:

<img width="1347" height="609" alt="image" src="https://github.com/user-attachments/assets/6e57bfc4-d921-472f-bf1d-c336ef15439a" />

### Not Found Page

Add screenshot:

<img width="1366" height="608" alt="image" src="https://github.com/user-attachments/assets/13162474-09d8-43af-8b5b-252ddd0d111b" />

---

## Author

Leshi Taiwo Oluwademilade
Built as Assessment 3 submission for:

**AltSchool Africa**  
Frontend Engineering Karatu 2025  
Third Semester Month 3 Assessment

Project Title:

**Simple Blog Application with Vue Router**
