### CLI

Build a new image ``docker build -t br1code/project-name .``

Run image ``docker run -d -p localport:port br1code/project-name``

Login ``docker login``

Push image ``docker push br1code/project-name``

List images ``docker images``

List containers ``docker ps``

### Dockerfile

**FROM**
Set the baseImage to use for subsequent instructions. FROM must be the first instruction in a Dockerfile.
``FROM node:10``

``FROM baseImage``
``FROM baseImage:tag``
``FROM baseImage@digest``

**WORKDIR**
Set the working directory for any subsequent ADD, COPY, CMD, ENTRYPOINT, or RUN instructions that follow it in the Dockerfile.

``WORKDIR /usr/src/app``

``WORKDIR /path/to/workdir``
``WORKDIR relative/path``

**COPY**
Copy files or folders from source to the dest path in the image's filesystem.

``COPY package*.json ./``
``COPY . .``

``COPY hello.txt /absolute/path``
``COPY hello.txt relative/to/workdir``

**RUN**
Execute any commands on top of the current image as a new layer and commit the results.

``RUN npm install``

``RUN apt-get update && apt-get install -y curl``

**EXPOSE**
Define the network ports that this container will listen on at runtime.

``EXPOSE 8080``
``EXPOSE 80 443 22``
``EXPOSE 7000-8000``

**CMD**
Provide defaults for an executing container. If an executable is not specified, then ENTRYPOINT must be specified as well. There can only be one CMD instruction in a Dockerfile.

``CMD [ "node", "app.js"]``

``CMD [ "/bin/ls", "-l" ]``

---
### Examples

**Express app**
```docker
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "app.js"]
```

**Static web page**
```docker
FROM nginx:alpine

COPY . /usr/share/nginx/html
```