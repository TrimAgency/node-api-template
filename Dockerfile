FROM node:10.15

LABEL maintainer=services@trimagency.com

RUN mkdir /app

WORKDIR /app

RUN npm install -g ts-node

COPY . .

EXPOSE 4000

# TODO STEPH: Edit to make dynamic
ENV NODE_ENV development

RUN npm install && npm run build

# Start the yoga server
# CMD ["npm", "run", "watch-node"]
