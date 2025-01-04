# Build stage
FROM node:18-alpine as build

# Set NODE_OPTIONS to increase memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./
RUN npm install

# Copy the entire project including assets
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 