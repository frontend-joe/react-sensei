![sensei logo](https://cdn.jsdelivr.net/gh/frontend-joe/assets@main/sensei7.png)

# react-sensei

Sensei is a UI component library built for frontend React developers.
The primary focus is to make clean responsive dashboards... fast!

## Installation

Sensei relies on your entire app being wrapped inside a SenseiProvider
component with a single theme prop.

### 1. Install react-sensei

Sensei can now be installed with a single dependency.

```javascript
npm i react-sensei
```

### 2. SenseiProvider and theme

Import a theme then wrap your whole app in the SenseiProvider component.

```javascript
import { SenseiProvider, themeDark as theme } from "react-sensei";

const App = () => <SenseiProvider theme={theme}>...</SenseiProvider>;

export default App;
```

[Click here for the full list of themes.](https://github.com/frontend-joe/react-sensei/tree/master/src/components/library/themes)

### 3. Go build a dashboard!

[Click here for the docs and examples.](https://react-sensei.com)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run publish:npm`

This script will create a /dist folder containing just the library of components.
