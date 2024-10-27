const axios = require('axios');

// Define the data to send in the POST request
const data = {
    username: 'testuser',
    email: 'test@example.com',
    password: 'password123'
};

// Send the POST request using axios
axios.post('http://localhost:5000/api/auth/register', data)
    .then(response => {
        console.log('Response data:', response.data);
    })
    .catch(error => {
        if (error.response) {
            // The request was made, and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error Status Code:', error.response.status);
            console.error('Error Data:', error.response.data);
            console.error('Error Headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No Response received:', error.request);
        } else {
            // Something else happened in setting up the request
            console.error('Error Message:', error.message);
        }
    });
