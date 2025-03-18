//all server stuff is in here

//importing (required) dependencies

const express = require("express"); //framework == node.js + express.js
const mongoose = require("mongoose"); //database == mongoDB + mongoose (easier to use with js)
const cors = require("cors"); //using cors for frontend connection
const dotenv = require("dotenv"); //manage variables


dotenv.config();
const app = express(); //initialize app with express

app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/api", userRoutes); //user routes for authentication
app.use("/api", taskRoutes);

const mongoURI = process.env.MONGO_URI;

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Successfully Connected"))
    .catch((err) => console.log(err)); //make sure to output any errors caught

//default port should allow more compatibility when running the app
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server Port: ${PORT}'));