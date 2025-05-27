const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.cookies.token;
    if (!authHeader ) {
        return res.status(403).json({message : "there is not header"});
    }
    const token = authHeader;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({message : "what's up"});
    }
};

module.exports = {
    authMiddleware
}