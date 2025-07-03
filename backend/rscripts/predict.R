# # predict.R

# args <- commandArgs(trailingOnly = TRUE)

# # Example inputs: Age Polyuria (as a basic example, you can expand later)
# age <- as.numeric(args[1])
# polyuria <- tolower(args[2])  # normalize input

# # Simulated rule-based prediction
# if (age > 45 && polyuria == "yes") {
#   cat("Positive")
# } else if (age > 30 && polyuria == "yes") {
#   cat("Positive")
# } else {
#   cat("Negative")
# }


# args <- commandArgs(trailingOnly = TRUE)
# input_string <- args[1]
# input_vector <- as.numeric(strsplit(input_string, ",")[[1]])

# # Load model
# model <- readRDS("rscripts/model.rds")

# # Create data frame for input (match the training structure)
# input_df <- data.frame(
#   Age = input_vector[1],
#   Gender = input_vector[2],
#   Polyuria = input_vector[3],
#   Polydipsia = input_vector[4],
#   SuddenWeightLoss = input_vector[5],
#   Weakness = input_vector[6],
#   Polyphagia = input_vector[7],
#   GenitalThrush = input_vector[8],
#   VisualBlurring = input_vector[9],
#   Itching = input_vector[10],
#   Irritability = input_vector[11],
#   DelayedHealing = input_vector[12],
#   PartialParesis = input_vector[13],
#   MuscleStiffness = input_vector[14],
#   Alopecia = input_vector[15],
#   Obesity = input_vector[16]
# )

# # Use the actual trained model to predict
# prediction <- predict(model, input_df)

# # Output prediction result
# cat(prediction)

# Set custom library path if needed
# RANDOM FOREST
.libPaths("r_libs")

args <- commandArgs(trailingOnly = TRUE)
input_vector <- strsplit(args[1], ",")[[1]]

library(caret)
library(randomForest)

# Load the model and dummyVars object used during training
model <- readRDS("rscripts/model.rds")
dmy <- readRDS("rscripts/dmy.rds")

# Prepare raw input with exact variable names & factor levels as training data
raw_input <- data.frame(
  Age = as.numeric(input_vector[1]),
  Gender = factor(input_vector[2], levels = c("Female", "Male")),
  Polyuria = factor(input_vector[3], levels = c("No", "Yes")),
  Polydipsia = factor(input_vector[4], levels = c("No", "Yes")),
  SuddenWeightLoss = factor(input_vector[5], levels = c("No", "Yes")),
  weakness = factor(input_vector[6], levels = c("No", "Yes")),
  Polyphagia = factor(input_vector[7], levels = c("No", "Yes")),
  GenitalThrush = factor(input_vector[8], levels = c("No", "Yes")),
  VisualBlurring = factor(input_vector[9], levels = c("No", "Yes")),
  Itching = factor(input_vector[10], levels = c("No", "Yes")),
  Irritability = factor(input_vector[11], levels = c("No", "Yes")),
  DelayedHealing = factor(input_vector[12], levels = c("No", "Yes")),
  PartialParesis = factor(input_vector[13], levels = c("No", "Yes")),
  MuscleStiffness = factor(input_vector[14], levels = c("No", "Yes")),
  Alopecia = factor(input_vector[15], levels = c("No", "Yes")),
  Obesity = factor(input_vector[16], levels = c("No", "Yes"))
)

# Apply dummyVars transformation (one-hot encoding)
input_encoded <- data.frame(predict(dmy, newdata = raw_input))

# Predict using random forest model
prediction <- predict(model, newdata = input_encoded, type = "response")

cat(as.character(prediction), "\n")



# LOGISTIC REGRESSION

# .libPaths("r_libs")
# library(caret)

# args <- commandArgs(trailingOnly = TRUE)
# input_string <- args[1]
# input_vector <- as.numeric(strsplit(input_string, ",")[[1]])

# # Load logistic model and dummyVars
# model <- readRDS("rscripts/model_logistic.rds")
# dmy <- readRDS("rscripts/dmy.rds")

# # Build raw input data frame with correct factor levels
# raw_input <- data.frame(
#   Age = input_vector[1],
#   Gender = factor(input_vector[2], levels = c("Male","Female")),
#   Polyuria = factor(input_vector[3], levels = c("Yes","No")),
#   Polydipsia = factor(input_vector[4], levels = c("Yes","No")),
#   sudden.weight.loss = factor(input_vector[5], levels = c("Yes","No")),
#   weakness = factor(input_vector[6], levels = c("Yes","No")),
#   Polyphagia = factor(input_vector[7], levels = c("Yes","No")),
#   Genital.thrush = factor(input_vector[8], levels = c("Yes","No")),
#   visual.blurring = factor(input_vector[9], levels = c("Yes","No")),
#   Itching = factor(input_vector[10], levels = c("Yes","No")),
#   Irritability = factor(input_vector[11], levels = c("Yes","No")),
#   delayed.healing = factor(input_vector[12], levels = c("Yes","No")),
#   partial.paresis = factor(input_vector[13], levels = c("Yes","No")),
#   muscle.stiffness = factor(input_vector[14], levels = c("Yes","No")),
#   Alopecia = factor(input_vector[15], levels = c("Yes","No")),
#   Obesity = factor(input_vector[16], levels = c("Yes","No"))
# )

# # Encode input using dummyVars from training
# input_encoded <- data.frame(predict(dmy, newdata = raw_input))

# # Predict probability for Logistic Regression
# prob <- predict(model, input_encoded, type = "response")

# # Convert probability to class label
# predicted_class <- ifelse(prob > 0.5, "Positive", "Negative")

# cat(predicted_class, "\n")
