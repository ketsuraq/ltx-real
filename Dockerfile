# Use the official Node.js image from the Docker Hub
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run Webpack
CMD ["npx", "webpack"]

# TO CREATE DOCKER IMAGE: 'docker build -t vlr .'
# TO RUN A CONTAINER WITHOUT IT EXITING AFTER THE SCRIPT HAS BEEN COMPLETED: 'docker run -it --entrypoint=/bin/bash vlr'

#it should work :)