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

## Setup environment

Sensei relies on your entire app being wrapped inside a SenseiProvider
component with a single theme prop.

### 1. Install react-sensei

```javascript
npm i react-sensei
```

### 2. Import chosen theme and wrap your whole app in a SenseiProvider

```javascript
import { SenseiProvider, themeDark as theme } from "react-sensei";

const App = () => <SenseiProvider theme={theme}>...</SenseiProvider>;

export default App;
```

[Click here for the full list of themes.](https://github.com/frontend-joe/react-sensei/tree/master/src/components/library/themes)

When the library becomes fully stable I will release the full theme file so you can compose your own.

### 3. Go build a dashboard!

[Click here for the docs and examples.](https://react-sensei.com)
