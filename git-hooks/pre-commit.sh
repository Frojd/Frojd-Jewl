#!/bin/sh

FRONTEND_PATH="component-library"
CLI_PATH="cli"
APP_PATH="$FRONTEND_PATH/app"

# Check if component-library app files changed
if git diff --cached --name-only | grep -q -e "$APP_PATH"
then
    echo "Running component library tests..."
    cd "$FRONTEND_PATH" || exit 1

    npm run test
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
    cd "$CLI_PATH" || exit 1
    npm run update_docs

    cd ..
fi

# Check if CLI files changed
if git diff --cached --name-only | grep -q -e "^$CLI_PATH/src" -e "^$CLI_PATH/test"
then
    echo "Running CLI tests..."
    cd "$CLI_PATH" || exit 1

    npm run build
    if [ $? -ne 0 ]; then
        echo "CLI build failed, please check your code and try again."
        exit 1
    fi

    npm run test:only
    if [ $? -ne 0 ]; then
        echo "CLI tests failed, please check your code and try again."
        exit 1
    fi

    cd ..
fi
