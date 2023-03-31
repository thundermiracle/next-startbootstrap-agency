FROM mcr.microsoft.com/playwright:v1.32.1-focal

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && pnpm install

COPY . .

CMD [ "pnpm", "e2e:upd" ]
