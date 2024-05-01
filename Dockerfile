FROM node:18.20.1-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN yarn install
RUN yarn global add react-scripts

# add app
COPY . ./

# start app
CMD ["yarn", "start"]