const mongoose = require("mongoose");

const AutoIncrement = require("mongoose-sequence")(mongoose);

const LogSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  attention: {
    type: Boolean,
    required: true,
  },
  staff: { type: String, required: true },
  date: { type: Date, default: Date.now },
  _staff: {
    type: mongoose.Schema.ObjectId,
    ref: "Staff",
  },
});

LogSchema.plugin(AutoIncrement, { inc_field: "id" });

// LogSchema.plugin(AutoIncrement, { inc_field: "id" });
module.exports = mongoose.model("logs", LogSchema);
