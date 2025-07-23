import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const predictDiabetes = (req, res) => {
  const input = req.body;

  // Check input validity (expecting 16 keys)
  if (!input || Object.keys(input).length !== 16) {
    return res.status(400).json({ error: "Invalid input format. Expecting 16 input fields." });
  }

  // Convert input object to comma-separated string in correct order
  const inputString = [
    input.Age,
    input.Gender,
    input.Polyuria,
    input.Polydipsia,
    input.SuddenWeightLoss,
    input.weakness,          // Note the uppercase 'W' here, make sure input matches!
    input.Polyphagia,
    input.GenitalThrush,
    input.VisualBlurring,
    input.Itching,
    input.Irritability,
    input.DelayedHealing,
    input.PartialParesis,
    input.MuscleStiffness,
    input.Alopecia,
    input.Obesity,
  ].join(",");

  // Path to the R script (adjust path if needed)
  const scriptPath = path.join(__dirname, "../rscripts/predict.R");

  // Command to run R script with input string argument
  const command = `Rscript "${scriptPath}" "${inputString}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("Execution error:", error);
      console.error("stderr:", stderr);
      return res.status(500).json({ error: "Internal server error running prediction" });
    }

    // Clean output and send as response
    const prediction = stdout.trim();
    res.json({success: true, prediction });
  });
};

export default predictDiabetes;
