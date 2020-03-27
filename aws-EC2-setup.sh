sudo yum update -y
sudo amazon-linux-extras install docker -y
sudo service docker start
# add ec2-user to docker group so you don't have to use sudo (requires restart of ec2 instance)
#sudo usermod -a -G docker ec2-user
sudo docker run --name angular-app-image-container -d -p 8080:80 aaronburk/angular-app-image:830da2d
