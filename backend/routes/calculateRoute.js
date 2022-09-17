const CalculateModel = require("../models/calculate");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const calc = await new CalculateModel(req.body).save();
    res.send(calc);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const fetchCalcs = await CalculateModel.find();
    res.send(fetchCalcs);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const calcUpdate = await CalculateModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.send(calcUpdate);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const calcDelete = await CalculateModel.findByIdAndDelete(req.params.id);
    res.send(calcDelete);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
