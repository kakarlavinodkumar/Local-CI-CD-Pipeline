const tokenService = require("../service/tokenservice");

/* checks whether the user is authenticated or not */
function isAuthenticated(token) {
    try {
        const is_valid_token = tokenService.validateToken(token);
        return {
            is_authenticated: true
        }
    } catch (err) {
        throw err;
    }
}