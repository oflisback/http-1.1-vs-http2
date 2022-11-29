This repo is done to experiment with scenarios with multiple simultaneous requests towards HTTP 1.1 and HTTP/2 node servers.

# Prerequisites

To run this you need to have pnpm, docker and docker-compose installed. Tested on linux only.

# How to use

```
docker-compose build
```

```
docker-compose up
```

The frontend service will be available at `https://localhost:4173` using a self-signed cert. It's talking to a node http 1.1 server at port 3011 and a http/2 server at port 3022.

The assumption was that spamming slow requests would prevent fast response when pinging the server, but there seems to be more to the story.
