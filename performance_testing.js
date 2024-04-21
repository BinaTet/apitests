// Import Axios for making HTTP requests
const axios = require('axios');

// Function to measure API response time for a specific endpoint
async function measureAPITime(endpointUrl) {
  const startTime = new Date().getTime();
  try {
    // Make an HTTP GET request to the API endpoint
    const response = await axios.get(endpointUrl);
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;

    // Log API response time
    console.log(`API Response Time (${endpointUrl}): ${responseTime} ms`);

    // Evaluate response time against threshold (1 second)
    if (responseTime <= 1000) {
      console.log(`API Response Time (${endpointUrl}) is within acceptable limits.`);
    } else {
      console.log(`API Response Time (${endpointUrl}) exceeds 1 second.`);
      throw new Error(`API Response Time (${endpointUrl}) exceeded threshold.`);
    }

    return response; // Return the Axios response object
  } catch (error) {
    console.error(`Error fetching data from ${endpointUrl}:`, error);
    throw error; // Throw error to handle failed requests
  }
}

// Test scenario: Performance testing with API response time checks
async function performanceTesting() {
  try {
    // SWAPI endpoint URLs to test
    const endpoints = [
      'https://swapi.dev/api/people/1', // Fetch details of Luke Skywalker
      'https://swapi.dev/api/films/1', // Fetch details of A New Hope
      'https://swapi.dev/api/starships/9' // Fetch details of Millennium Falcon
      // Add more endpoints as needed for testing
    ];

    // Measure response time for each SWAPI endpoint
    for (const endpoint of endpoints) {
      await measureAPITime(endpoint);
    }

    console.log('Performance testing passed successfully.');
  } catch (error) {
    console.error('Performance testing failed:', error);
    process.exit(1); // Exit with a non-zero code to indicate test failure
  }
}

// Execute the performance testing scenario
performanceTesting();
