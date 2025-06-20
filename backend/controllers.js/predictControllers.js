// const { spawn } = require("child_process");
import {spawn} from "child_process"

const predictDiabetes = (req, res) => {
  const { age, polyuria } = req.body;

  if (!age || !polyuria) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const rScript = spawn("Rscript", ["./rscripts/predict.R", age, polyuria]);

  let result = "";

  rScript.stdout.on("data", (data) => {
    result += data.toString();
  });

  rScript.stderr.on("data", (data) => {
    console.error("R Error:", data.toString());
  });

  rScript.on("close", () => {
    res.json({ success: true, prediction: result.trim() });
  });
};

// module.exports = { predictDiabetes };

export default predictDiabetes