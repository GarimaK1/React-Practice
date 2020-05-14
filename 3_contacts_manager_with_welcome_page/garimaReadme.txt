Note to self:
I think after the problems that I faced in setting alerts for this project,
it is very important that you have a uniform method of conveying messages
from the backend API. That make setting alerts such a breeze.

-- For deployment to Heroku:
Created account, downloaded & installed heroku cli
In server.js, added code block under "// Serve static assets in production"
In congif folder, created file "production.json" for production use. 
In package.json, added script "heroku-postbuild" to build folder on heroku, after it is deployed.
Go to home folder outside client, run heroku commands:
heroku create, added remote.

-- Basic funda for this application:
We are using JWT to authenticate users/tokens and get login info from token.
Inside the token, we are sending user id as payload.
Protected routes use the 'auth' middleware that we created to authenticate users/token.
In 'auth' middleware we extract token payload and pass/set user info with/into req.user object.    
So all protected routes have this information going forward.
It can be accessed by 'req.user' 

-- Applicatin workflow:
Register user. This also returns a token. So basically user gets logged in automatically on registrtion.
Login user. We get user info like user id from token.
Create/Update/Delet contact. Protected routes. 'auth' middleware is used. Token is required. Get user info from token payload.
So automatically creator id is obtained from token so create/update/delete methods are applicable for that creator id only.
This is how the application is so simple. It is designed to work this way. 

-- jsonwebtoken to manage JWT

-- config folder
using config package from npm to manage global variables.
created default.json to create and use global variables for mongodb. 
the value of these global objects will be available throughout the project.

-- express-validator
using this package from npm to validate input on arrival at each end-point
e.g. if 'name' is required in mongoose model, input (form/via postman) must have 'name'

-- axios used as http client for this project. Axios related links I referenced-
To see how to catch response with status code other than 2xx, 
https://github.com/axios/axios#handling-errors
https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests

-- setAuthToken questions
Q) Why do we only set the token in App.js and not the loadUser?
Ans) Because when App.js first loads and there is no user data, we don't want to see 401 unauthorized.
With loadUser, we need token to get data. Therefore, just quietly check for token in App.js.
 
setAuthToken is used once in App.js and inside loadUser() in AuthState.
loadUser() is used in register(), login(), Home page. 

If you only used the setAuthToken function in the App.js, it will only check for the token
on the initial loading of the application. If user is not loaded/logged in/just registered, there
will be no token and 'x-auth-token' header will be removed.

We call setAuthToken in loadUser, and loadUser is called on registration. loadUser is also called 
when Home page loads. So, when a user registers or home page reloads, loadUser is run and token is
sent for all subsequesnt axios calls. 

-- Proteted routes
HomePage got protected against unauthorized viewing by using PrivateRoute.js 

================================================================================================================
Note: I started using Material UI and found it to be very extensive. Time was short.
So I switched back to react-bootstrap. Its not the best but it is very intuitive/easy for me to use .
-- React front-end created using Material UI. Everything relating to react inside 'client-MaterialUI' folder!
For material UI, Roboto font is required.
To use roboto font:
Method - 1:
Add the following lines inside <head> tag of public/index.html and thats it!
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Roboto', sans-serif;
      }
    </style>
Disadvantage of method-1 : relies on google CDN/google server to ensure font delivery. 
                            May not be applicable everywhere like China, which blocks Google.

Method - 2:
Inside client folder:
    npm install typeface-roboto --save
Then, in your index.js: import 'typeface-roboto'; This did not work for me. So as a workaround, I did this:
    npm install typeface-roboto --save 
In src/index.css, add the following lines: 
    @import '~typeface-roboto';
    body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    } 
In src/index.js, import the css file:
    import './index.css';
Disadvantage of method-2 : Includes unnessary Roboto fonts too that are not used by Material UI.
                            So just delete the unwanted font files and usage if you want.
================================================================================================================