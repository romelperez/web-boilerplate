[Index](./)

# API

We use [npm scripts](https://docs.npmjs.com/misc/scripts) as API to our project.

## Installation

```bash
$ npm install
```

## Workflow commands

| Command | Description    |
| :------ | :------------- |
| `npm run start` | Start development server |
| `npm run start:watch` | Start server with watcher |
| `npm run start:tunnel` | Start development server with [ngrok](https://ngrok.com) tunnel |
| `npm run start:production` | Start production server |
| `npm run build` | Build development assets |
| `npm run build:production` | Build production assets |
| `npm run build-server:watch` | Build server code with watcher |
| `npm run build-js:watch` | Start JS builder with watcher |
| `npm run build-css:watch` | Start SASS builder with watcher |
| `npm run test` | Run all tests |
| `npm run docs` | Generate all documentations |

## System variables

- `NODE_PATH` - Folder to add in the node `require('...dependency...')` resolver, which is important to define on the workflow commands because many components/modules in server and client side code use them
- `NODE_ENV` - Node environment
  - `development` (default)
  - `test`
  - `production`
- `PORT` - Server port
- `ENABLE_TUNNEL` - Enable tunnel by [ngrok](https://ngrok.com) on server start
- `NODE_CI` or `TRAVIS` - Define [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) environment which will make the tests _single-run_
