[npm]: https://img.shields.io/npm/v/interserver-react.svg?style=flat-square
[npm-url]: https://npmjs.com/package/interserver-react

# Interserver React

[![npm package][npm]][npm-url]
![npm bundle size](https://img.shields.io/bundlephobia/min/interserver-react?style=flat-square)
![NPM](https://img.shields.io/npm/l/interserver-react?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/mefechoel/interserver-react?style=flat-square)

> IntersectionObserver simplified

Checkout the main [`interserver`](https://www.npmjs.com/package/interserver) package.

## Features

- Tiny (~1kb minified)
- TypeScript ready

## Installation

With `yarn`:

```bash
yarn add interserver-react
```

With `npm`:

```bash
npm install --save interserver-react
```

## Usage

The `useInterserver` function takes the same options as the `interserver` function (`top`, `right`, `bottom`, `left` and `once`).

```jsx
import React from "react";
import useInterserver from "interserver-react";

const MyComponent = () => {
  const { isIntersecting, setRef } = useIntersector();

  return (
    <div ref={setRef}>
      {isIntersecting ? "Now you see me!" : "Oh, the darkness..."}
    </div>
  );
};
```

## Example

You can build a `LazyImage` component, that only requests an image, when it is approaching the viewport:

```jsx
// LazyImage.jsx
import React from "react";
import useInterserver from "interserver-react";

const LazyImage = ({ alt, src, srcSet, ...props }) => {
  const { isIntersecting, setRef } = useInterserver({
    once: true,
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  });
  const imgSrc = isIntersecting ? src : undefined;
  const imgSrcSet = isIntersecting ? srcSet : undefined;
  return (
    <img
      {...props}
      src={imgSrc}
      srcSet={imgSrcSet}
      alt={alt}
      ref={setRef}
    />
  );
};

LazyImage.propTypes = propTypes;
LazyImage.defaultProps = defaultProps;

export default LazyImage;
```

## License

MIT
