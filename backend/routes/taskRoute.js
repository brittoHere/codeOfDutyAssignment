const TaskModel = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const task = await new TaskModel(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const task = await TaskModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await TaskModel.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
