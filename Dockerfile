# Step 1: Build the React app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies (including development dependencies)
RUN npm install

# Copy the rest of the project files
COPY . ./

# Build the React app using Vite
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the build files to the Nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
