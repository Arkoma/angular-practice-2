cat ./dockerPass.txt | docker login -u=$dockerUser --password-stdin

# cleanup in case running locally
docker stop angular-app-image-container
docker rm -vf $(docker ps -a -q)
docker rmi -f $(docker images -a -q)

# set build variables
export angularAppVersion=`(git rev-parse --short HEAD)`

# build
docker build -t angular-app-image:$angularAppVersion .

# set push variables
export angularAppImageID=`docker images --filter=reference=angular-app-image --format "{{.ID}}"`

# push
docker tag $angularAppImageID aaronburk/angular-app-image:$angularAppVersion
docker push aaronburk/angular-app-image
