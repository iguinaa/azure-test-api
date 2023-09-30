function authenticate(req, res, next) {
    const authHeader = req.headers.authorization

    let token

    // Check if the token is valid (for simplicity, we'll use a hardcoded token)
    if ( authHeader && (token = authHeader.split(' ')[1]) === 'mysecrettoken') {
        next(); // Token is valid, proceed to the next middleware or route handler
    } else {
        res.status(401).json({ error: 'Unauthorized' }); // Token is invalid, send a 401 Unauthorized response
    }
}

module.exports = authenticate