const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    // get token from header
    // const token = req.get('Authorization');
    const token = req.get('x-auth-token'); // or use req.header('x-auth-token')

    if (!token) { //token doesn't exist
        return res.status(401).json({ message: 'Token required. Authorization failed!'});
    }

    //token exists
    try {
        /* Using Authorization header, bearer token
        const received = token.split(' ')[1];
        const decoded = jwt.verify(received, config.get('jwtSecret')); */

        // Verified using secret key that token is valid, authentic
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;

        console.log("Auth successful!");
        next();

    } catch (err) {
        return res.status(401).json({ message: 'Invalid token. Authorization failed!'});
    }
}