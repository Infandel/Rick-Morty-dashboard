# React + TypeScript + Vite Pet Project

A modern frontend application built with React, TypeScript, and Vite, following Feature-Sliced Design architecture principles. The project demonstrates data visualization and table management using multiple public APIs.

## Features

- **Posts Table**: Interactive data table with sorting, filtering, pagination, and virtualization
  - Data source: JSONPlaceholder API
  - Built with Tanstack Table
  - Virtualized rows for performance with large datasets
  - Global search and user filtering
- **Character Analytics**: Visual data analysis with interactive charts
  - Data source: Rick and Morty API
  - Character status distribution (Pie Chart)
  - Top locations by character count (Bar Chart)
  - Species distribution (Bar Chart)
  - Built with Recharts

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS v4
- **Data Fetching**: React Query (TanStack Query)
- **Routing**: React Router v6
- **Table**: Tanstack Table
- **Virtualization**: react-window
- **Charts**: Recharts
- **Architecture**: Feature-Sliced Design (FSD)

## Installation

# Install dependencies

`npm install`

## Development

# Start development server

`npm run dev`

The application will be available at `http://localhost:5173`

# Build for production

`npm run build`

# Preview production build

`npm run preview`

## Deployment to GitHub Pages

### Automatic Deployment

This project includes a GitHub Actions workflow for automatic deployment:

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. Push to the `main` branch to trigger deployment

# Build the project

## API Sources

- **JSONPlaceholder**: https://jsonplaceholder.typicode.com/
  - Used for posts and users data
- **Rick and Morty API**: https://rickandmortyapi.com/
  - Used for character analytics and visualization
