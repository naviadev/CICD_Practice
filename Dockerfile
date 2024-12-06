# Base image
FROM node:22

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application files
COPY server .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
