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

The component is built on styled components and currently relies on a theme
being applied via ThemeProvider.

### 1. Install styled-components

```javascript
npm i styled-components
```

### 2. Import chosen theme and wrap your whole app in a ThemeProvider

```javascript
import { ThemeProvider } from "styled-components";
import { StatIconCard, themeDark as theme } from "react-sensei";

const App = () => (
  <ThemeProvider theme={theme}>
    <StatIconCard label="Revenue" value="$34k" icon="dollar-alt" />
  </ThemeProvider>
);

export default App;
```

When the library becomes fully stable I will release the full theme file so you can compose your own.
