#!/bin/bash
DIRECTORY=`dirname $0`
echo ${DIRECTORY}
cd `dirname $0`
# Extract the package
mkdir www
touch donald.txt
tar -xzf package.tgz
rm package.tgz

# Swap it all around, keeping the previous version aside in case something goes wrong
rm -rf www_old
mkdir blubb
mv www www_old
mv build www