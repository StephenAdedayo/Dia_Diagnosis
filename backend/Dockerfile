FROM rocker/r-base:latest

RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    build-essential

# Install Node.js 20.x (or 18.x) WITHOUT npm yet
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Explicitly install npm package
RUN apt-get install -y npm

# Verify node and npm versions (npm should now be found)
RUN node -v && npm -v

WORKDIR /app

COPY . .

RUN npm install

RUN R -e "install.packages(c('tidyverse', 'caret', 'e1071', 'class', 'rpart', 'randomForest', 'pROC', 'MLmetrics'), repos='https://cloud.r-project.org')"

EXPOSE 3000

CMD ["npm", "start"]
