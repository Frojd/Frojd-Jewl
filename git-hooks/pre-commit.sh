#!/bin/sh

FRONTEND_PATH="component-library"
CLI_PATH="cli"
APP_PATH="$FRONTEND_PATH/app"

# Check if component-library app files changed
git diff --cached --name-only | if grep -e $APP_PATH
then
    cd $FRONTEND_PATH && npm run test
    if [ $? -ne 0 ]; then
        echo "Component library tests failed, please check your code and try again."
        exit 1
    fi

    npm run fixcode:test
    if [ $? -ne 0 ]; then
        echo "Prettier failed, please check your code and try again."
        exit 1
    fi

    cd ..
    cd $CLI_PATH
    npm run update_docs
fi

# Check if CLI files changed
git diff --cached --name-only | if grep -e "^$CLI_PATH/src" -e "^$CLI_PATH/test"
then
    echo "Running CLI tests..."
    cd $CLI_PATH && npm run build && npm run test:only
    if [ $? -ne 0 ]; then
        echo "CLI tests failed, please check your code and try again."
        exit 1
    fi
fi
