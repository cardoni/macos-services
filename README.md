# _macOS_ Services / Scripts

> This repository is a collection of macOS services and scripts that I find incredible useful and time-saving on a daily basis.

## Get Started

```sh
$ npm install
```

This command will install the package's (dev) dependencies and then run the package's `npm run build` script, as detailed below.

## Build Project (ES6/7+ => ES5 Transpile)

The following command will use [`Babel`](https://babeljs.io/) to transpile this project's ES6/7 code (and some other possible-future-js-niceties) to standard ES5 code, that can be consumed by many more current-day js engines:

```sh
npm run build
```

> **Protip**
>
> If you'd like to have [`Babel`](https://babeljs.io/) watch the `./src` directory and auto-compile whenever a file change is detected:

```sh
npm run build:watch
```

## Contribute

See something you'd like to improve? Spot a bug?

Please feel free to contribute via a [`Pull-Request`](https://github.com/cardoni/macos-services/pulls) or simply filing a new [`Issue Ticket`](https://github.com/cardoni/macos-services/issues/new).

## License

[`MIT`](https://en.wikipedia.org/wiki/MIT_License)
