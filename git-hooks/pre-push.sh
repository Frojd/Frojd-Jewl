#!/bin/sh

FRONTEND_PATH="component-library"
APP_PATH="$FRONTEND_PATH/app"
git diff --cached --name-only | if grep -e $APP_PATH
then
    cd $FRONTEND_PATH && npm run deploy-storybook
    if [ $? -ne 0 ]; then
        echo "Deploy failed"
        exit 1
    fi
fi
