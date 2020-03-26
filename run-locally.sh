docker stop angular-app-image-container
docker container rm -f angular-app-image-container
docker image rm -f angular-app-image
docker build -t angular-app-image .
docker run --name angular-app-image-container -d -p 8080:80 angular-app-image
