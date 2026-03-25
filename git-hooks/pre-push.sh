#!/bin/sh

FRONTEND_PATH="component-library"
APP_PATH="$FRONTEND_PATH/app"

cd $FRONTEND_PATH && npm run deploy
if [ $? -ne 0 ]; then
    echo "Deploy failed"
    exit 1
fi
