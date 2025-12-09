# Use official Node LTS
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["node", "src/server.js"]