# Build stage
FROM node:18-alpine as build

# Set NODE_OPTIONS to increase memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV NODE_ENV=production

# Install build dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    gcc \
    libc-dev \
    autoconf \
    automake \
    libtool \
    nasm \
    tiff \
    jpeg \
    zlib \
    zlib-dev \
    file \
    pkgconf

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with npm ci for more reliable builds
RUN npm set progress=false && \
    npm config set fund false && \
    npm config set audit false && \
    npm config set update-notifier false && \
    npm ci && \
    npm install -g vite

# Copy the entire project including public directory
COPY . .

# Build the project using npx to ensure vite is found
RUN npx vite build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 