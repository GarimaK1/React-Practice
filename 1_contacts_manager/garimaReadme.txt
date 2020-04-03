-- Basic funda for this application:
We are using JWT to authenticate users/tokens and get login info from token.
Inside the token, we are sending user id as payload.
Protected routes use the 'auth' middleware that we created to authenticate users/token.
In 'auth' middleware we extract token payload and pass/set user info with/into req.user object.    
So all protected routes have this information going forward.
It can be accessed by 'req.user' 

-- Applicatin workflow:
Register user.
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




