FROM node:10.16.1

WORKDIR /srv/site

ADD package.json /srv/site/package.json
ADD . /srv/site

RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 80

CMD ["HOST=0.0.0.0", "PORT=80", "serve", "-s", "build", "-p", "80"]
