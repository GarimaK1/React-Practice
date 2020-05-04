Garima Notes:
Used react-bootstrap to style the application
Added vanilla bootstrap and react-bootstrap to this project

To use inline styles, use style={{}}

In react, lists must have keys. Keys must be unique.

We can import images into component because of webpack.

If you store global variable in any .env file and make changes, make sure to restart the server 
(npm start for dev) for changes to take effect.

React basics explained: https://www.reactenlightenment.com/

Passing Props UP in 2_github_finder (Search.js and App.js)-
It's not actually possible to pass props up to a parent component, props only go to the child component.
What is happening here is the prop passed to the child is a function declared in the parent components scope, so that function has reference to all of the execution context of the parent component.

So searchUsers is a function in App.js and we pass it down as a prop to the Search.js component. The searchUsers function has access to all the scope of the App.js component in which it was declared, but it doesn't matter where it is called from. This is just how scope and closures work in JavaScript.

There is no passing of props up to a parent, that isn't possible and if you think about it makes no sense.  Props are passed to a child so if you want to pass a prop up, it must have come from the parent, so why do you need to pass it back up when the parent already has it?

==========================================================================================================
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
