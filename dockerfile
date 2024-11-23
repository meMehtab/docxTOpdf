# Use an official Node.js image as the base image
FROM node:18

# Install LibreOffice
RUN apt-get update && apt-get install -y \
    libreoffice \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /   

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies for all services
RUN npm install
RUN npm install -g live-server pm2

# Copy the entire project into the container
COPY . .

# Set environment variables for ports
ENV UPLOAD_SERVICE_PORT=3001
ENV CONVERSION_SERVICE_PORT=3002
ENV SECURITY_SERVICE_PORT=3003
ENV FRONTEND_PORT=3000

# Expose ports for each service
EXPOSE 3001 3002 3003 3000

# Start all services using pm2
CMD pm2 start services/upload-service/server.js --name "upload-service" --env PORT=$UPLOAD_SERVICE_PORT && \
    pm2 start services/conversion-service/server.js --name "conversion-service" --env PORT=$CONVERSION_SERVICE_PORT && \
    pm2 start services/security-service/server.js --name "encryption-service" --env PORT=$SECURITY_SERVICE_PORT && \
    npx live-server frontend/public --port=$FRONTEND_PORT --no-browser --host=0.0.0.0 --watch && \
    pm2 logs
