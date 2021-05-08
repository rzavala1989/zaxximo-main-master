const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  privilege: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  fullName: { type: String },
});

UserSchema.pre("save", async function (next) {
  this.fullName = `${this.firstName} ${this.lastName}`;
});

module.exports = User = mongoose.model("users", UserSchema);
