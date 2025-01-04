# Dependencies stage
FROM node:18-alpine AS deps

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
COPY package*.json ./

# Install all dependencies
RUN npm set progress=false && \
    npm config set fund false && \
    npm config set audit false && \
    npm config set update-notifier false && \
    npm ci

# Builder stage
FROM node:18-alpine AS builder

# Install the same build dependencies
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

# Set NODE_OPTIONS to increase memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 