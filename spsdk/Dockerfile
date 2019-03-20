FROM registry.cn-shanghai.aliyuncs.com/shuzhi/nodejs_stream_base:10.15
WORKDIR /home/red/
COPY io/ping/ ./io/ping
COPY io/serialport/ ./io/serialport
COPY spsdk/package.json ./spsdk/
RUN cd io/serialport && npm install --only=production --registry=https://registry.npm.taobao.org
COPY spsdk/index.js ./spsdk
CMD [ "bash" ]