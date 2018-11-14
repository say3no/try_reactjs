FROM node:11.1-alpine
LABEL maintainer="say3no@gmail.com"
EXPOSE 5000
WORKDIR /root
RUN npm install -g serve
COPY ./build .

CMD ["serve", "-s"]