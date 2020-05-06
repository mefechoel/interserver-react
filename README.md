# Interserver React

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
