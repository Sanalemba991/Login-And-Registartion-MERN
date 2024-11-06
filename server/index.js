require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

// MongoDB URI with password from .env
const uri = `mongodb+srv://laitonjamsanalembameitei99:${process.env.DB_PASSWORD}@yoga-master.mc6jh.mongodb.net/?retryWrites=true&w=majority&appName=yoga-master`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Middleware
app.use(cors()); // Allow Cross-Origin requests
app.use(express.json()); // Parse incoming JSON requests

// Test MongoDB Connection
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process if connection fails
  }
}

connectDB();
