//importing (required) dependencies
const express = require("express"); //framework == node.js + express.js
const mongoose = require("mongoose"); //database == mongoDB + mongoose (easier to use with js)
const cors = require("cors"); //using cors for frontend connection
const dotenv = require("dotenv"); //manage variables


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());