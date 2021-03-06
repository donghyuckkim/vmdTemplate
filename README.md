<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## How to set up the development environment
1.Install development tools
  - Docker (tested on v20.10.7)
  - Visual Studio Code (with extension: Docker, Remote-Containers)

2.Clone source code
  ```bash
  $ git clone https://github.com/ahnchan2/nestjs-ts-boilerplate.git
  ```

3.Run container
  ```bash
  # example if image name is `ahnchan2/fnf:nestjs-ts-boilerplate-dev-0.0.1`
  # {host-port} : the port you want to open on host
  # {host-src-path} : absolute path to cloned source code

  # runs in Linux or Intel Chip Mac host (AMD64)
  $ docker run --privileged -it -d -p {host-port}:3000 -v {host-src-path}:/app ahnchan2/fnf:nestjs-ts-boilerplate-amd64-dev-0.0.1

  # runs in Apple Chip Mac host (ARM64)
  $ docker run --privileged -it -d -p {host-port}:3000 -v {host-src-path}:/app ahnchan2/fnf:nestjs-ts-boilerplate-arm64-dev-0.0.1
  ```

4.Atattach inside to container (recommended to use visual studio code)

5.Install the package (execute commands **inside a container**)
  ```bash
  $ cd /app
  $ npm i -g pm2
  $ pm2 install typescript ts-node
  $ npm i -g @nestjs/cli
  $ npm ci --no-optional
  ```

6.Build & Run (execute commands **inside a container**)
  ```bash
  $ cd /app
  $ npm run build
  $ npm run start:dev
  ```

7.Request test (request from host)
  ```
  http://localhost:{host-port}
  ```

## Development Guide

Controller
- API ?????? ??????/?????? ??????
- ?????? service ??????????????? ?????? ?????? (???????????? ?????? ???????????? ??????)
- ????????? API ?????? ?????? ???????????? service ?????? ??????
- API ???????????? source ??? ??????????????? ????????? ??? (naming ??? API ?????? ????????? ????????? ????????? ???)

DTO
- ????????? ??? ????????? ????????? ?????? ??????

Service
- ??? service ???????????? ?????? ???????????? ????????? ??????
- ????????? ??????????????? service ??? ?????? ?????? (ex. ????????????,????????????,???????????? => UserService ?????? ??????????????????,??????????????????,?????????????????? => MilageService)

DAO
- ???????????? ???????????????, Service ?????? ??????????????? ????????? ???

## Reference

- NestJS Documentation - https://docs.nestjs.com/
- NestJS Documentation (Korean) - https://docs.nestjs.kr/
- NestJS Community (Korean) - https://www.nest-js.com/tech/19?#

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# dev
$ npm run start:dev

# stg
$ npm run start:stg

# prd
$ npm run start:prd
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil My??liwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
