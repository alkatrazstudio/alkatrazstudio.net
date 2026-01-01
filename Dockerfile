FROM node:24.12.0-alpine3.23
WORKDIR /app
VOLUME /app
EXPOSE 3000

RUN corepack enable && \
    yarn set version 4.12.0 && \
    yarn config set --home enableTelemetry false
