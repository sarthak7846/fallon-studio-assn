const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Feedback = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  feedbackMessage: { type: String, required: true },
});

const FeedbackModel = mongoose.model("feedbacks", Feedback);

module.exports = {
  FeedbackModel,
};
