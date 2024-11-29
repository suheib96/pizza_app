FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .
# nicht technisch notwendig , Doku 
EXPOSE 5030

CMD ["npm", "start"]

