const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const token = getTokenFromHeaders(req);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
        req.payload = decoded;
        next();
    });
}

function getTokenFromHeaders(req) {
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        const token = req.headers.authorization.split(" ")[1];
        return token;
    }
    return null;
}

module.exports = verifyToken;
