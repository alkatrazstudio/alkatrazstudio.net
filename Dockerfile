FROM node:22.19.0-alpine3.22
WORKDIR /app
VOLUME /app
EXPOSE 3000

RUN corepack enable && \
    yarn set version 4.9.4 && \
    yarn config set --home enableTelemetry false
