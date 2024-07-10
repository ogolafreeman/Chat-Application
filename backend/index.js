// Importing required modules
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require('dotenv').config(); // Loading environment variables from a .env file

// Creating an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to enable CORS with default settings
app.use(cors({ origin: true }));

// Defining a POST route for user authentication
app.post("/authenticate", async (req, res) => {
  // Extracting the username from the request body
  const { username } = req.body;

  try {
    // Sending a PUT request to the Chat Engine API to create/update a user
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": process.env.CHAT_ENGINE_PRIVATE_KEY } } // Using the private key from environment variables
    );

    // Returning the response data with the same status code received from the Chat Engine API
    return res.status(response.status).json(response.data);
  } catch (error) {
    // Returning the error response data with the same status code received from the Chat Engine API
    return res.status(error.response.status).json(error.response.data);
  }
});

// Starting the server and listening on port 3001
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
