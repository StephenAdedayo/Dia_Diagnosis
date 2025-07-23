# # predict.R


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
# input_vector <- strsplit(input_string, ",")[[1]]  # keep as character vector

# # Load logistic model and dummyVars
# model <- readRDS("rscripts/model_logistic.rds")
# dmy <- readRDS("rscripts/dmy.rds")

# # Build raw input data frame with correct factor levels
# raw_input <- data.frame(
#   Age = as.numeric(input_vector[1]),
#   Gender = factor(input_vector[2], levels = c("Female", "Male")),
#   Polyuria = factor(input_vector[3], levels = c("No", "Yes")),
#   Polydipsia = factor(input_vector[4], levels = c("No", "Yes")),
#   SuddenWeightLoss = factor(input_vector[5], levels = c("No", "Yes")),
#   weakness = factor(input_vector[6], levels = c("No", "Yes")),
#   Polyphagia = factor(input_vector[7], levels = c("No", "Yes")),
#   GenitalThrush = factor(input_vector[8], levels = c("No", "Yes")),
#   VisualBlurring = factor(input_vector[9], levels = c("No", "Yes")),
#   Itching = factor(input_vector[10], levels = c("No", "Yes")),
#   Irritability = factor(input_vector[11], levels = c("No", "Yes")),
#   DelayedHealing = factor(input_vector[12], levels = c("No", "Yes")),
#   PartialParesis = factor(input_vector[13], levels = c("No", "Yes")),
#   MuscleStiffness = factor(input_vector[14], levels = c("No", "Yes")),
#   Alopecia = factor(input_vector[15], levels = c("No", "Yes")),
#   Obesity = factor(input_vector[16], levels = c("No", "Yes"))
# )

# # Encode input using dummyVars
# input_encoded <- data.frame(predict(dmy, newdata = raw_input))

# # Predict probability using logistic regression model
# prob <- predict(model, input_encoded, type = "response")
# prediction <- ifelse(prob > 0.5, "Positive", "Negative")

# cat(prediction, "\n")


# SUPPORT VECTOR MACHINE
# .libPaths("r_libs")
# library(e1071)  # load the right package for your SVM model
# library(caret)

# args <- commandArgs(trailingOnly = TRUE)
# input_string <- args[1]
# input_vector <- strsplit(input_string, ",")[[1]]

# # Load model and dummyVars
# model <- readRDS("rscripts/model_svm.rds")
# dmy <- readRDS("rscripts/dmy.rds")

# # Build raw input with correct factor levels
# raw_input <- data.frame(
#   Age = as.numeric(input_vector[1]),
#   Gender = factor(input_vector[2], levels = c("Female", "Male")),
#   Polyuria = factor(input_vector[3], levels = c("No", "Yes")),
#   Polydipsia = factor(input_vector[4], levels = c("No", "Yes")),
#   SuddenWeightLoss = factor(input_vector[5], levels = c("No", "Yes")),
#   weakness = factor(input_vector[6], levels = c("No", "Yes")),
#   Polyphagia = factor(input_vector[7], levels = c("No", "Yes")),
#   GenitalThrush = factor(input_vector[8], levels = c("No", "Yes")),
#   VisualBlurring = factor(input_vector[9], levels = c("No", "Yes")),
#   Itching = factor(input_vector[10], levels = c("No", "Yes")),
#   Irritability = factor(input_vector[11], levels = c("No", "Yes")),
#   DelayedHealing = factor(input_vector[12], levels = c("No", "Yes")),
#   PartialParesis = factor(input_vector[13], levels = c("No", "Yes")),
#   MuscleStiffness = factor(input_vector[14], levels = c("No", "Yes")),
#   Alopecia = factor(input_vector[15], levels = c("No", "Yes")),
#   Obesity = factor(input_vector[16], levels = c("No", "Yes"))
# )

# # Encode input using dummyVars
# input_encoded <- data.frame(predict(dmy, newdata = raw_input))

# # Use predict with type="response" or default for e1071 svm model
# prediction <- predict(model, input_encoded)

# cat(as.character(prediction), "\n")
