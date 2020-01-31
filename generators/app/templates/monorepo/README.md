# Fullstack TypeScript monorepo

# Dependencies

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://legacy.yarnpkg.com/lang/en/docs/install)
- [MongoDB](https://www.mongodb.com/download-center/enterprise) (_Docker recomended_)

## Stack

This monorepo was built using TypeScript, Node.js and React.

### Node.js

A Node.js REST API using Koa.js and MongoDB. It also has unit tests with [Jest](https://jestjs.io/).

### React

A simple List/Detail pages application that fetch data from the Node.js REST API.

## Running the project

- `cd <FOLDER_NAME>`
- `yarn web:server`

You can also run each package indenpendently by accessing the given package on `/packages` folder and running `yarn start`.

## License

[MIT](https://github.com/vitorfreitas/generator-ts-monorepo/blob/master/LICENSE)
