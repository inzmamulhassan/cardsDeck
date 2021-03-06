<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Backend Programming Test Using Nestjs

#### Scenario
You intend to create card games like Poker and Blackjack. The goal is to create an API to handle decks and cards to be used in any game like
these.
#### Instructions
You are required to provide an implementation of REST API to simulate a deck of cards.
You need to provide a solution written in NodeJS Typescript . If you do not feel too comfortable with the language, it is OK to research a little
before starting writing the API. Feel free to use any NodeJS Typescript framework in the market or simply use a custom build.
The API should have the following methods to handle cards and decks:

* Create a new Deck
* Open a Deck
* Draw a Card



## Dependency

```bash
MongoDb

Nodejs
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

## Docker Compose Dependecy

```bash
#install
Docker
Docker Compose
```
Code change in file app.module.ts

```bash
imports: [MongooseModule.forRoot('mongodb://localhost/nest'), DeckModule],
```
to

```bash
imports: [MongooseModule.forRoot('mongodb://mongodb/nest'), DeckModule],
```

## Running the dockerized app

```bash
# development
$ docker-compose up dev

# production mode
$ docker-compose up prod
```


## License

Nest is [MIT licensed](LICENSE).
