#!/bin/sh

FRONTEND_PATH="component-library"
APP_PATH="$FRONTEND_PATH/app"
git diff --cached --name-only | if grep -e $APP_PATH
then
    cd $FRONTEND_PATH && npm run test
    if [ $? -ne 0 ]; then
        echo "Lint failed, please check your code and try again."
        exit 1
    fi
fi
