![sensei logo](https://cdn.jsdelivr.net/gh/frontend-joe/assets@main/sensei7.png)

# react-sensei

UI Component Library for React that aims to be the cleanest

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The app you will see here is used primarily to demonstrate our components via
Instagram.

Use the sidebar on the left to navigate between components.

It's quite possible that the documentation for each component will reside here.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

I don't really use this much as the next script does pretty much the same thing.

Can be useful though when testing your React build.

### `npm run publish:npm`

This script will create a /dist folder containing just the library of components.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Setup styled-components theming

Full guide on styling these components coming very soon.

The library relies heavily on a CSS in JS theme which is basically a plain JavaScript object similar to the following:

```javascript
export default {
  colorPrimary: "#6A26CD",
  colorPrimaryText: "white",
  colorDefaultBackground: "#f3f3f9",
  colorDefaultText: "#73707C",
};
```

I'm still deciding whether to make the package work out of the box _without_ a CSS in JS theme environment.
