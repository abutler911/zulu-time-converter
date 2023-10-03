# Use the official Node.js image from the Docker Hub
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy all the content into the image
COPY . .

# Make port 8080 available for the app
EXPOSE 8080

# Define the command to run the app
CMD [ "npm", "start" ]
