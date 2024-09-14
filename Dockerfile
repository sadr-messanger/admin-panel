# Step 1: Use the official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the React app using Vite
RUN npm run build

# Step 7: Use a lighter image for serving the app
FROM nginx:alpine

# Step 8: Copy the built app from the previous stage to the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose the port that nginx will run on
EXPOSE 80

# Step 10: Start nginx
CMD ["nginx", "-g", "daemon off;"]
