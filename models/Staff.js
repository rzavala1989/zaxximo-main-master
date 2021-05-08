const mongoose = require("mongoose");

const StaffSchema = mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
  fullName: { type: String },
});
StaffSchema.set("collection", "staff");

StaffSchema.index({ firstName: 1, lastName: 1 }, { unique: true });

StaffSchema.pre("save", async function (next) {
  this.fullName = `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("staff", StaffSchema);
