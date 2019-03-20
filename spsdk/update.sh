host=edge@10.88.34.115
port=22
keypath=~/.ssh/id_rsa
project=nodeRedOnSuanpan
rsync -delete -avhe "ssh -i ${keypath} -p ${port}" ./../ ${host}:~/${project}
ssh -i ${keypath} -p ${port} ${host} "cd ~/${project}/ && bash ./spsdk/buildonly.sh"