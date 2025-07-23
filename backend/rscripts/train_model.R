# Load necessary libraries

.libPaths("r_libs")


library(tidyverse)
library(caret)
library(e1071)
library(class)
library(rpart)
library(randomForest)
library(pROC)
library(MLmetrics)

# Load the dataset
data <- read.csv("rscripts/diabetes_data.csv")
# View(data)
colnames(data) <- c(
  "Age", "Gender", "Polyuria", "Polydipsia", "SuddenWeightLoss",
  "weakness", "Polyphagia", "GenitalThrush", "VisualBlurring",
  "Itching", "Irritability", "DelayedHealing", "PartialParesis",
  "MuscleStiffness", "Alopecia", "Obesity", "class"
)

# Check for missing values
sum(is.na(data))  # Total number of missing values
colSums(is.na(data))  # Missing values per column

# Check for outliers in numeric features
boxplot(data$Age, main="Boxplot of Age", col="lightblue")

# Data exploration
summary(data)
str(data)
table(data$class)

# Convert categorical variables to factors
data <- data %>%
  mutate(across(-Age, as.factor))

# Classification Charts
# Bar Chart: Distribution of class
ggplot(data, aes(x = class, fill = class)) +
  geom_bar() +
  ggtitle("Distribution of Diabetes Class") +
  theme_minimal()

# Pie Chart
class_count <- table(data$class)
pie(class_count, labels = paste0(names(class_count),
                                 " (", round(100 * class_count/sum(class_count), 1), "%)"),
    col = rainbow(length(class_count)), main = "Diabetes Class Distribution")

# Define target and features
features <- data[, -ncol(data)]
target <- data$class

# Encode categorical variables
dmy <- dummyVars(" ~ .", data = features)
features_transformed <- data.frame(predict(dmy, newdata = features))
saveRDS(dmy, file = "rscripts/dmy.rds")

# Combine processed features and target
processed_data <- cbind(features_transformed, class = target)

# Train-Test Split (80/20)
set.seed(123)
train_index <- createDataPartition(processed_data$class, p = 0.8, list = FALSE)
train_data <- processed_data[train_index, ]
test_data <- processed_data[-train_index, ]

# -----Model Initialization & Training
# Decision Tree
dt_model <- rpart(class ~ ., data = train_data, method = "class")
dt_pred <- predict(dt_model, test_data, type = "class")


# Logistic Regression
log_model <- glm(class ~ ., data = train_data, family = "binomial")
log_prob <- predict(log_model, test_data, type = "response")
log_pred <- ifelse(log_prob > 0.5, "Positive", "Negative")


# KNN (using caret)
knn_model <- train(class ~ ., data = train_data, method = "knn", tuneLength = 5)
knn_pred <- predict(knn_model, test_data)


# SVM
svm_model <- svm(class ~ ., data = train_data, probability = TRUE)
svm_pred <- predict(svm_model, test_data)

# Random Forest
rf_model <- randomForest(class ~ ., data = train_data, ntree = 100)
rf_pred <- predict(rf_model, test_data)

# Predictions
dt_pred <- predict(dt_model, test_data, type = "class")
log_pred <- predict(log_model, test_data, type = "response")
log_pred_class <- ifelse(log_pred > 0.5, "Positive", "Negative")

knn_pred <- predict(knn_model, test_data)
svm_pred <- predict(svm_model, test_data)
rf_pred <- predict(rf_model, test_data)

# Confusion Matrices
confusionMatrix(as.factor(dt_pred), test_data$class)
confusionMatrix(as.factor(log_pred_class), test_data$class)
confusionMatrix(knn_pred, test_data$class)
confusionMatrix(svm_pred, test_data$class)
confusionMatrix(rf_pred, test_data$class)

# Evaluation Metrics: AUC for Random Forest
rf_probs <- predict(rf_model, test_data, type = "prob")[, 2]
roc_curve <- roc(as.numeric(test_data$class) - 1, rf_probs)
auc(roc_curve)

# Prediction Chart for Random Forest
test_data$predicted <- rf_pred
ggplot(test_data, aes(x = predicted, fill = predicted)) +
  geom_bar() +
  ggtitle("Prediction Distribution - Random Forest") +
  theme_minimal()
rf_probs <- predict(rf_model, test_data, type = "prob")[, "Positive"]
roc_curve <- roc(as.numeric(test_data$class) == 2, rf_probs)


# --- EVALUATION FUNCTION ---
# evaluate_model <- function(true, predicted, model_name){
#   cm <- confusionMatrix(as.factor(predicted), as.factor(true), positive = "Positive")
  
#   accuracy <- cm$overall["Accuracy"]
#   precision <- cm$byClass["Precision"]
#   recall <- cm$byClass["Recall"]
#   f1 <- cm$byClass["F1"]
  
#   cat("====", model_name, "====\n")
#   cat("Accuracy :", round(accuracy, 4), "\n")
#   cat("Precision:", round(precision, 4), "\n")
#   cat("Recall   :", round(recall, 4), "\n")
#   cat("F1 Score :", round(f1, 4), "\n\n")
# }
evaluate_model <- function(true, predicted, model_name){
  levels <- c("Negative", "Positive")
  true <- factor(true, levels = levels)
  predicted <- factor(predicted, levels = levels)
  
  cm <- confusionMatrix(predicted, true, positive = "Positive")
  
  accuracy <- cm$overall["Accuracy"]
  precision <- cm$byClass["Precision"]
  recall <- cm$byClass["Recall"]
  f1 <- cm$byClass["F1"]
  
  cat("====", model_name, "====\n")
  cat("Accuracy :", round(accuracy, 4), "\n")
  cat("Precision:", round(precision, 4), "\n")
  cat("Recall   :", round(recall, 4), "\n")
  cat("F1 Score :", round(f1, 4), "\n\n")
}

# --- MODEL EVALUATION ---

evaluate_model(test_data$class, dt_pred, "Decision Tree")
evaluate_model(test_data$class, log_pred, "Logistic Regression")
evaluate_model(test_data$class, knn_pred, "K Nearest Neighbors")
evaluate_model(test_data$class, svm_pred, "Support Vector Machine")
evaluate_model(test_data$class, rf_pred, "Random Forest")

# Optional: ROC Curve for Random Forest
rf_probs <- predict(rf_model, test_data, type = "prob")[, "Positive"]
roc_curve <- roc(as.numeric(test_data$class) == 2, rf_probs)
plot(roc_curve, col = "blue", main = "ROC Curve - Random Forest")
auc(roc_curve)
# r
# copy
# edit
model<-readRDS("rscripts/model.rds")


saveRDS(rf_model, file = "rscripts/model.rds")
cat("✅ Model saved to rscripts/model.rds\n")

# saveRDS(log_model, file = "rscripts/model_logistic.rds")
# cat("✅ Logistic Regression model saved to rscripts/model_logistic.rds\n")

# saveRDS(svm_model, file='rscripts/model_svm.rds')
# cat("✅ Support Vector Machine model saved to rscripts/model_svm.rds\n")
