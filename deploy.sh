#!/bin/bash
cd `dirname $0`

# Extract the package
mkdir www
tar -xzf package.tgz
rm package.tgz

# Swap it all around, keeping the previous version aside in case something goes wrong
rm -rf www_old
mv www www_old
mv build www