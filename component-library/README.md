# React sass starterkit #

This is an opinionated frontend development kit.
It includes a small scaffolder for react components and is exporting a bundle with a global variable named Components

## Installation ##

1. npm install
2. npm run storybook

This will create a base set of containers and components in the app folder that you can work with and start the devserver at [http://localhost:7000](http://localhost:7000).


## CLI commands ##

### Development ###

Start storybook:
```
npm run storybook
```

Build storybook
```
npm run storybook:build
```

Build and deploy storybook to https://frojd.github.io/Frojd-Jewl/
```
npm run deploy
```

### Creation commands ###

Create a new component:
```
npm run new ComponentName
```

Create a container component:
```
npm run new ComponentName -- -c
```

Delete a component:
```
npm run delete ComponentName
```

Delete a container component:
```
npm run delete ComponentName -- -c
```

Run tests:
```
npm test
```

Update test snapshots (if added):
```
npm test -- -u
```

Scaffold an example project:
```
npm run scaffold
```

Scaffold an empty project:
```
npm run scaffold -- -e
```

Code formatting via prettier:
```
npm run fixcode
```

To only test that all files are formated correct:
```
npm run fixcode:test
```

Codechecking via eslint:
```
npm run eslint
```

Autofix via eslint:
```
npm run eslint:fix
```

### Additional commands and troubleshooting ###

To run webpack analyzer to check your bundle and packagesizes you can append --analyze to a command
```
npm start -- --analyze
npm run build -- --analyze
npm run build:prod -- --analyze
```
