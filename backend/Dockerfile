# Use a base image with R preinstalled
FROM rocker/r-base:latest

# Install system dependencies and Node.js
RUN apt-get update && \
    apt-get install -y curl gnupg build-essential && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Set the working directory
WORKDIR /app

# Copy your project files into the container
COPY . .

# Install Node.js dependencies
RUN npm install

# Install required R packages
RUN R -e "install.packages(c('tidyverse', 'caret', 'e1071', 'class', 'rpart', 'randomForest', 'pROC', 'MLmetrics'), repos='https://cloud.r-project.org')"

# Expose the port your Node.js server runs on
EXPOSE 8000

# Start your Node.js app
CMD ["npm", "start"]
