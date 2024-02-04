# Clicker
Button click counter Vite + React + TypeScript + MUI

## Tech stack

This app is built using the following technologies:

- [React](https://react.dev/): A popular JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/docs/): A typed superset of JavaScript that enhances reliability and scalability.
- [Vite](https://vitejs.dev/): A fast frontend build tool.

## Installation

1. Install [Node.js](https://nodejs.org/ru) version 16 or higher.
2. Clone this [repository](https://github.com/KirillVM/graphiql-app) to your computer.
3. Go to folder `clicker`.
4. Install all dependencies using `npm install`.
5. Run `npm run dev` in command line and enjoy 😉

## Available scripts

In the project directory, you can run:

```
npm run dev
```

Runs the app in the development mode.
The page will reload if you make edits.\
You will also see any lint errors in the console.

```
npm run build
```

Builds the app for production.\
It correctly bundles React in production mode and optimizes the build for the best performance.

```
npm run lint:fix
```

This script uses ESLint to check the project's source code against certain rules and coding styles for TypeScript and TypeScript React files and attempts to automatically fix linting errors.

It also includes additional options such as reporting unused directives and setting the maximum number of warnings allowed.

See the section [ESLint docs](https://eslint.org/docs/latest/) for more information.

```
npm run format:fix
```

This script uses Prettier to automatically format the project's source code and applies changes to the files, ensuring consistency in the code style, indentation, and other formatting rules defined in the Prettier configuration.

See the section [Prettier docs](https://prettier.io/docs/en/) for more information.

```
npm run preview
```

This script starts Vite in preview mode, providing a quick way to preview the production build locally. It allows you to see how the application will behave in a production-like environment before deployment.

See the section [Vite docs](https://vitejs.dev/) for more information.

```
npm run prepare
```

This script creates and configures Husky, a popular tool for working with Git hooks in a future project. Husky provides the ability to automatically fire an action before commits or other Git operations.

Running the "npm run prepare" command at the root of the project installs Husky and sets up the necessary Git hooks so that they are automatically executed on certain Git events.

If there are any problem with Husky, remove husky folder and run :

```
npx mrm@2 lint-staged
npm i
```

See the section [Husky docs](https://typicode.github.io/husky/) for more information.

##