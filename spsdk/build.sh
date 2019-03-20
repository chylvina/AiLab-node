IMAGE=registry.cn-shanghai.aliyuncs.com/shuzhi/spsdk
VERSION=$(cat ./spsdk/version)

docker build -t ${IMAGE}:${VERSION} . -f ./spsdk/Dockerfile
docker tag ${IMAGE}:${VERSION} ${IMAGE}:latest

docker push ${IMAGE}:${VERSION}
docker push ${IMAGE}:latest