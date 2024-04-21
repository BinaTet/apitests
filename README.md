# Star Wars Universe Explorer

This repository contains a web application for exploring the Star Wars universe using data fetched from the Star Wars API (SWAPI). Additionally, it includes performance testing scripts to evaluate the response times of specific SWAPI endpoints.

## Contents

- **`index.html`**: Main HTML file structuring the Star Wars Universe Explorer web application.
- **`style.css`**: CSS file for styling the application.
- **`script.js`**: JavaScript file containing logic to interact with SWAPI and handle user interactions.
- **`performance_testing.js`**: Script to measure response times of SWAPI endpoints using Axios.
- **`swapi_performance.js`**: Script to test response times of specific SWAPI endpoints.

## Application Features

- Users can click on buttons corresponding to different categories (e.g., Characters, Films) to view related data fetched from SWAPI.
- Search functionality allows users to filter and find specific items within each category.
- Responsive design for various screen sizes.

## Cypress Tests

### Backend Performance Testing

- **Goal**: Assess the performance of the backend API, specifically testing response times with large datasets.
- **Test Criteria**: If an API response exceeds 1 second with 1 million data, the test will fail.
- **Test Location**: Cypress tests evaluate the speed of the backend API when handling large amounts of data.

### Frontend End-to-End (E2E) Testing

- **Goal**: Ensure the frontend application responds promptly when rendering data fetched from the backend.
- **Test Criteria**: The frontend should display one page of data (from the fetched 1 million data) within 1 second.
- **Test Condition**: Failure to meet the response time criteria will block commits.

## Performance Testing Scripts

#### Execution Instructions

## Application Execution:

Open index.html in a web browser to run the Star Wars Universe Explorer.

## Performance Testing:

Navigate to the project directory containing the scripts.

Run the following command to execute the performance testing script:

node performance_testing.js

Run the following command to execute the specific endpoint response time testing script:

node swapi_performance.js

