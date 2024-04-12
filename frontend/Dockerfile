# Use the official Node.js image as the base
FROM node:21.7

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port on which the Vite development server runs
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]