FROM node:21.7

WORKDIR /app

# Expose the port on which the Vite development server runs
EXPOSE 5173

# Set the default command to run Vite development server
CMD ["pnpm", "run", "dev", "--", "--host"]

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json ./

# Install dependencies using pnpm
RUN npm install -g pnpm && pnpm install

# Copy the entire project to the working directory
COPY . .