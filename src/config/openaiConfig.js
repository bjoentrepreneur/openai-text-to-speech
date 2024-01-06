require("dotenv").config();
const fs = require("fs");
const OpenAI = require("openai");

try {
  // Check if .env file exists
  if (!fs.existsSync(".env")) {
    throw new Error("Missing .env file");
  }

  // Check if OPENAI_API_KEY is defined in the .env file
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY not found in .env file");
  }

  const openai = new OpenAI(process.env.OPENAI_API_KEY);
  module.exports = openai;
} catch (error) {
  console.error("Error initializing OpenAI: ", error.message);
  process.exit(1); // Exit the process with an error code
}
