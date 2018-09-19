#!/bin/bash

cd `dirname $0`
pkill -f node
npm run server_prod
