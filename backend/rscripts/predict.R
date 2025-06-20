# predict.R

args <- commandArgs(trailingOnly = TRUE)

# Example inputs: Age Polyuria (as a basic example, you can expand later)
age <- as.numeric(args[1])
polyuria <- tolower(args[2])  # normalize input

# Simulated rule-based prediction
if (age > 45 && polyuria == "yes") {
  cat("Positive")
} else if (age > 30 && polyuria == "yes") {
  cat("Positive")
} else {
  cat("Negative")
}
