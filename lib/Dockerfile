FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/DillaEditz/Chuti_Doni_MD /root/prabathLK
WORKDIR /root/DillaEditz/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
