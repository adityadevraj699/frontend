# Blogging Application - Frontend

This repository contains the frontend code for the **Blogging Application**, built using **React** and **Vite**. The frontend allows users to interact with the blogging platform, where they can create, edit, view, and delete blog posts. The application is responsive, user-friendly, and built with performance optimizations powered by Vite.

Live Preview: [Blogging Application](http://15.206.84.178:3000/)
## Backend Repository
For the backend source code, visit the repository [here](https://github.com/adityadevraj699/backend).


## Features
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Blog Post Management**: Users can create, view, edit, and delete blog posts.
- **Authentication**: Supports user registration and login for posting and managing blogs.
- **Real-time Content Updates**: Integrated with the backend for dynamic blog content display.
- **Category and Tags**: Filter posts by category and tags for better content organization.

## Tech Stack
- **React**: For building the user interface.
- **Vite**: For fast bundling and hot module replacement (HMR).
- **JavaScript**: For adding functionality and interactivity.
- **CSS**: For styling the application.


## Getting Started

Follow these steps to set up the frontend application locally.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/frontend.git
cd frontend
```

### 2. Install Dependencies
Ensure you have **Node.js** and **npm** installed. If not, download them from [Node.js Official Website](https://nodejs.org/).

Install the necessary dependencies:
```bash
npm install
```

### 3. Start the Development Server
To start the development server and see your application in action, run:
```bash
npm run dev
```
This will launch the app on `http://localhost:5173/` where you can see your application in development mode.

### 4. Build for Production
To create an optimized production build, use the following command:
```bash
npm run build
```
The build will be generated in the `dist` folder.

### 5. Preview the Production Build
To locally preview the production build:
```bash
npm run preview
```
This will serve the build output locally to ensure everything works as expected.

### 6. Linting and Code Quality
This template includes some **ESLint** rules for maintaining code quality and consistency. You can run the linter with:
```bash
npm run lint
```

## Plugins Used
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Uses **Babel** for Fast Refresh during development.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Uses **SWC** for Fast Refresh, offering an alternative build performance optimization.

## Contributing
Feel free to open issues or pull requests to contribute to the development of this application.

---

This description provides a detailed yet concise overview of your **React + Vite** blogging application frontend, along with clear setup instructions for other developers.
