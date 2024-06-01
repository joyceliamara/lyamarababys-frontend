FROM node:21-alpine as build

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

FROM node:21-alpine as production

WORKDIR /app

COPY --from=build /app/package.json .
COPY --from=build /app/yarn.lock .
COPY --from=build /app/.next ./.next

RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start"]

# docker build -t lyamarababys-frontend:latest .
# docker run -p 3000:3000 lyamarababys-frontend:latest
# push
# docker tag lyamarababys-frontend:latest 40069003840/lyamarababys-frontend:latest
# docker push 40069003840/lyamarababys-frontend:latest