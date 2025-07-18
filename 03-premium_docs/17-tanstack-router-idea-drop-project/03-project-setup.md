# Project Setup

Let's start our project. We will be using the TanStack for this project.

I will be turning this into a full stack application later, so ultimately, I am going to have the following folder structure:

```
idea-drop-app
├── idea-drop-ui (React)
|── idea-drop-api (Node, Express, MongoDB)
```

If you want to follow along with the full stack application, run the following:

```bash
mkdir idea-drop
cd idea-drop
```

Now, we can use `tsrouter-app` to create our project:

```bash
(npm create -- tsrouter-app@latest idea-drop-ui --framework React --interactive)
```

When it asks about the router, select the `file-based` option. We will also select yes for Tailwind CSS. TypeScript will also be used by default.

Select "none" for toolchain.

Now it will ask about a ton of other optional libraries. There are some really great options here like Clerk authentication, Sentry for error tracking, ShadCN for UI components, Netlify for deployment, and more. It even offers "TanStack Query" which we will be using, however we will install it manually later. So just hit enter for now.

When it asks about examples, just hit enter.

Open the project in your code editor. Run the server with the following command:

```bash
npm run dev
```

Your project will start on `http://localhost:3000`.

## Routing Setup

I want to just go over the routing setup. Running the Vite CLI makes it so that we don't need to do much manually to get setup, but it is good to know how it works.

So the entry point to the entire app is the `main.tsx` file. This is where the router is created and the app is rendered.

The `createRouter` function is used to create a new router instance. It takes in the `routeTree`, which is a file generated by TanStack Router. You should never touch this file. You should commit it because it is a critical part of the router, but you should never change anything in it.

A context object is also passed in. This is used to share context or data between routes. This makes it so there are less cases where we need to worry about any kind of 3rd party state management library.

Some other options. The `defaultPreload` option is used to preload data when user "intends" to navigate (hover/focus). There are some other options. Then we are using the `RouterProvider` to provide the router to the app. This is a component that wraps the entire app and provides the router context.

## Routes Folder

Then we have the `routes` folder. This is where we create our file-based routes. The `index.tsx` file is the entry point for the routes. This is where we create our routes and export them.

#### `src/routes/__root.tsx` File

This is the file that is used to create the root route. This is the top level route that wraps all of the other routes. It is used to create a layout for the app. This is where we can add a header, footer, or any other components that should be shared across all routes. There are also what are called "layout routes" that I will explain later.

#### `src/routes/index.tsx` File

This is the homepage route. This is where we can add any components that should be displayed on the homepage.

Let's clean up the homepage. Open the `src/routes/index.tsx` file and replace the code with the following:

```tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return <>My App</>;
}
```

In the next video, we will look closer at this code and how to create routes.
