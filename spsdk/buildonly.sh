IMAGE=registry.cn-shanghai.aliyuncs.com/shuzhi/spsdk
VERSION=$(cat ./spsdk/version)
echo $(pwd)
echo ${IMAGE}:${VERSION}
docker build -t ${IMAGE}:${VERSION} . -f ./spsdk/Dockerfile
docker tag ${IMAGE}:${VERSION} ${IMAGE}:latest
