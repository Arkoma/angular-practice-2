sudo yum update -y
sudo amazon-linux-extras install docker -y
sudo service docker start
sudo docker run --name angular-app-image-container -d -p 8080:80 aaronburk/angular-app-image:c3112f1
