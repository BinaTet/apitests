// Import Axios for making HTTP requests
const axios = require('axios');

// Function to measure response time for an API endpoint
async function measureAPITime(endpointUrl) {
  const startTime = new Date().getTime();
  try {
    // Make an HTTP GET request to the API endpoint
    const response = await axios.get(endpointUrl);
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;

    // Log response time
    console.log(`API Response Time: ${responseTime} ms`);

    // Evaluate response time against threshold (1 second)
    if (responseTime <= 1000) {
      console.log(`API Response Time is within acceptable limits.`);
    } else {
      console.log(`API Response Time exceeds 1 second.`);
    }

    return response; // Return the Axios response object
  } catch (error) {
    console.error(`Error fetching data from ${endpointUrl}:`, error);
    throw error; // Throw error to handle failed requests
  }
}

// Test scenario: Measure response time for specific SWAPI endpoints
async function testAPITime() {
  const baseUrl = 'https://swapi.dev/api';
  const endpoints = [
    '/people/1', // Fetch details of a specific person (Luke Skywalker)
    '/films/1', // Fetch details of a specific film (A New Hope)
    '/starships/9' // Fetch details of a specific starship (Millennium Falcon)
    // Add more endpoints as needed for testing
  ];

  // Loop through each endpoint and measure response time
  for (const endpoint of endpoints) {
    const endpointUrl = `${baseUrl}${endpoint}`;
    try {
      // Measure response time for the current endpoint
      await measureAPITime(endpointUrl);
    } catch (error) {
      console.error(`API test failed for endpoint: ${endpointUrl}`);
    }
  }
}

// Execute the test scenario
testAPITime();
