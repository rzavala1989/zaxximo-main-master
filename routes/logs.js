const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Log = require("../models/Log");

router.get("/", (req, res) => {
  Log.find()
    .sort({ date: -1 })
    .then((logs) => res.json(logs))
    .catch((err) => res.status(404).json({ nopostfound: "No logs found" }));
});

router.post("/", async (req, res) => {
  const u = await User.findOne({ fullName: req.body.user });

  if (!u) {
    return res.status(400).json({
      success: false,
      error: "Staff member not found",
    });
  }

  req.body._user = u._id;

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

    const user = await User.findOne({ fullName: req.body.user });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "Staff member not found",
      });
    }

    req.body._user = user._id;

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
