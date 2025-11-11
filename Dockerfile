# Dockerfile
FROM node:22.17.0-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build TypeScript (if applicable)
RUN npm run build

# Expose your app port
EXPOSE 4112

# Start the app
CMD ["npm", "run", "start"]
