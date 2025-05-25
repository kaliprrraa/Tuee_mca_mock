const Result = require("../models/Result");

exports.saveResult = async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).json({ message: "Result saved!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving result", error });
  }
};
