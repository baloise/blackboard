#!/bin/bash
cd `dirname $0`

rm -rf app_old
mv server app_old

tar -xzf package.tgz
rm package.tgz
