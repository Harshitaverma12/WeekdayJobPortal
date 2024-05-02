# Job Search Application

This is a job search application built using React and Redux for state management. It allows users to search for jobs based on various filters such as experience, role, location, and minimum pay.

## Project Structure

The project is structured as follows:

- **src/components/SearchJob.js**: React component responsible for displaying job search functionality, including filters and job listings.
- **src/components/JobCard.js**: React component responsible for displaying individual job details.
- **src/components/Filters.js**: React component containing filter options for job search.
- **src/redux/jobSlice.js**: Redux slice for managing job-related state, including fetching jobs asynchronously.
- **src/redux/store.js**: Redux store configuration.
- **src/App.css**: CSS file for styling components.

## Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository:

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run eject`: Removes the single build dependency from your project and copies all configuration files and transitive dependencies into the project.

## Additional Notes

- This project uses Redux Toolkit for efficient Redux state management.
- The job data is fetched asynchronously from an API using Redux Thunk middleware.
- Styling is done using CSS modules.

## To Change the Count of Cards

- Go to jobSlice.jsx file and in line number 29 change the limit value.
