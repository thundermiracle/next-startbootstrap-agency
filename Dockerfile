FROM mcr.microsoft.com/playwright:v1.48.2-focal

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && pnpm install

COPY . .

CMD [ "pnpm", "e2e:upd" ]
