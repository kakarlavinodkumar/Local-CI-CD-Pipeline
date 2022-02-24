const jwt = require('jsonwebtoken');
const secret_key = "local_ci_cd_pipeline";

function generateToken(payload) {
    const token = jwt.sign(...payload, secret_key, {
        expiresIn: 86400
    });
    return token;
}

function validateToken(token) {
    try {
        const decoded = jwt.verify(token, secret_key);
        return decoded;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    generateToken: generateToken,
    validateToken: validateToken
}
