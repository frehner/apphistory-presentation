# App History presentation

This presentation was created in Oct 2021 to give an overview of the App History proposal as it existed at that time. Note that things here may change at any moment, since this is a proposal and not a finalized spec. Also note that my speaker notes don't exactly match what I said during my talk, but do give a general idea of what I did speak about for each slide.

[View the slides](https://apphistory-presentation.netlify.app)

[View the slides with (rough) speaker notes](https://apphistory-presentation.netlify.app/?presenterMode=true)

---

Spectacle Boilerplate

## Contents

- [Reference](#reference)
- [Getting Started](#getting-started)
- [Tutorial](#tutorial)
- [Build & Deployment](#build-deployment)

## Reference

The Spectacle core API is available in the [Spectacle Docs](https://github.com/FormidableLabs/spectacle/blob/main/README.md).

## Getting Started

1. Install dependencies

   ```sh
   $ yarn install
   ```

2. Start the webpack server. The server will run at the default `webpack-dev-server` address, [`localhost:8080`](http://localhost:8080).

   ```sh
   $ yarn start

   # Or with a specific port!
   $ yarn start --port=3000
   ```

## Tutorial

If want you a step-by-step guide for getting started with Spectacle, a basic tutorial is available [here](https://github.com/FormidableLabs/spectacle/blob/main/docs/tutorial.md).

## Build & Deployment

Building the dist version of the project is as easy as running

```sh
$ yarn build
```

From there you can deploy the built slides in `dist` to services like Netlify, Surge, etc!
