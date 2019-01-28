<p align='center'>
<br><img src='https://user-images.githubusercontent.com/74385/47948807-e0779800-df72-11e8-81e8-68ec5c61de46.png' width='160'><br>
</p>

<h1 align='center'>
rsui
</h1>

<p align='center'>
Reusable Sass UI Components 🎉
</p>

<p align='center'>
<img src='https://img.shields.io/badge/build-pending-lightgrey.svg'>
</p>

<br>

UI components written as modular Sass files.

[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/rstacruz/rsui/tree/master/)

## Usage via npm

```sh
yarn add rstacruz/rsui
```

Use any of the `.scss` files at the root of this repo. Nest an `@import` in.

```sh
.my-field {
  @import '~@rstacruz/rsui/floating-label-input';
}
```

## Usage without npm (preferred)

Just copy the contents of each `.scss` file you need into your project. Each file is usable on its own, and provide great starting grounds for custom cumponents.
