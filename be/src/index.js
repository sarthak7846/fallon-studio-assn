const express = require("express");
const cors = require("cors");
const path = require("path");
const { connectToDb } = require("./db");
const { FeedbackModel } = require("./models/feedbackModel");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
connectToDb();

app.get("/", (req, res) => {
  res.send("Server is healthy");
});

app.get("/feedbacks", async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find();

    res.status(200).json(feedbacks);
  } catch (error) {
    console.log(error);
  }
});

app.post("/submit-feedback", async (req, res) => {
  console.log(req.body);

  const feedback = req.body;

  try {
    const newFeedback = new FeedbackModel(feedback);

    await newFeedback.save();

    res.status(201).json({
      message: "Feedback created successfully.",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
