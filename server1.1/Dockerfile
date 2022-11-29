FROM node:18

WORKDIR /usr/src/app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

EXPOSE 3011

CMD [ "pnpm", "start" ]
