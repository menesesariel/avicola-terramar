# Use a specific version of node alpine for consistency and reliability
FROM node:18-alpine as builder

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json) for better caching
COPY package*.json ./

# Install dependencies in a separate layer to leverage Docker cache
RUN npm install --frozen-lockfile

# Copy the rest of your source files
COPY . .

# Build the application - the output should be static files if Vite is configured correctly
RUN npm run build

# Production stage - Use a minimal nginx alpine image to serve the static files
FROM nginx:1.21-alpine

# Copy static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace the default nginx configuration with our custom file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port for documentation purposes; Cloud Run will ignore this
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
