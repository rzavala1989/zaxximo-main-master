const express = require("express");
const router = express.Router();
const Staff = require("../models/Staff");
const Log = require("../models/Log");

router.get("/", (req, res) => {
  Log.find()
    .sort({ date: -1 })
    .then((logs) => res.json(logs))
    .catch((err) => res.status(404).json({ nopostfound: "No posts found" }));
});

router.post("/", async (req, res) => {
  const s = await Staff.findOne({ fullName: req.body.staff });

  if (!s) {
    return res.status(400).json({
      success: false,
      error: "Staff member not found",
    });
  }

  req.body._staff = s._id;

  try {
    const log = await Log.create(req.body);

    return res.status(201).json({
      success: true,
      data: log,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let log = Log.findById(req.params.id);

    if (!log) {
      return res.status(400).json({
        success: false,
        error: "Log not found",
      });
    }

    const staff = await Staff.findOne({ fullName: req.body.staff });

    if (!staff) {
      return res.status(400).json({
        success: false,
        error: "Staff member not found",
      });
    }

    req.body._staff = staff._id;

    // req.body.date = Date.now();

    console.log(req.body);

    log = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.status(201).json({
      success: true,
      data: log,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);

    if (!log) {
      return res.status(400).json({
        success: false,
        error: "Log not found",
      });
    }
    await log.remove();

    res.status(201).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
});

module.exports = router;
