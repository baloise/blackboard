#!/usr/bin/env bash
ssh $USER:$PASSWORD@PUBLIC_URL

sudo apt-get update

# Stop apache webserver
sudo systemctl stop apache2
sudo systemctl disable apache2

# Install nginx
sudo apt-get install -y nginx-full

# Install NodeJS
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# Start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx


# deploy app
# run app (npm start)

