# Start from the official R base image
FROM rocker/r-base:latest

# Install system dependencies needed for Node.js and build tools
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    build-essential

# Install Node.js 18.x and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Verify node and npm versions (optional, for debugging)
RUN node -v && npm -v

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Install Node.js dependencies
RUN npm install

# Install R packages needed for your model
RUN R -e "install.packages(c('tidyverse', 'caret', 'e1071', 'class', 'rpart', 'randomForest', 'pROC', 'MLmetrics'), repos='https://cloud.r-project.org')"

# Expose your app port
EXPOSE 8000

# Start your Node.js app
CMD ["npm", "start"]
