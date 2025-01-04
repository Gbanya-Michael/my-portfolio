# Build stage
FROM node:18-alpine as build

# Set NODE_OPTIONS to increase memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Install build dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    gcc \
    autoconf \
    automake \
    libtool \
    nasm \
    libpng-dev \
    libjpeg-turbo-dev

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with specific flags to speed up installation
RUN npm set progress=false && \
    npm config set fund false && \
    npm config set audit false && \
    npm config set update-notifier false && \
    npm install --no-optional --prefer-offline

# Copy the rest of the application
COPY . .

# Build the application
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