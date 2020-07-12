# My reads

A Book Tracking React application for the udacity nanodegree

## Project structure

```
Project structure
.
├── books -- Folder that contains the main route of the application
│   ├── components -- Folder that contains all shareable components thorught all the routes 
│   ├── list -- Folder that contains the route for my shelves
│   ├── search -- Folder that contains the route for searching books 
└── utils -- Folder that contains shared logic and services like API for the whole application 

Route structure
route
├── route.util.js -- This files containt logic functions util for the route
├── route.css -- This files contain the style of the route
└── route.js -- This files contain the route code
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Credits

Using **Material UI** for the view style https://github.com/mui-org/material-ui

Using **query-string** for parsing the params from URL https://github.com/sindresorhus/query-string
