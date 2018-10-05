const jwt = require("jsonwebtoken");

const encodedData = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "2d"
    });
}

const verifyToken = (req, res, next) => {
    try {
        if (req.headers.myToken) {
            const data = jwt.verify(req.headers.myToken, process.env.JWT_SECRET);
            req.userId = data.Id;
            req.userEmail = data.Email;
            next();
        }
        else throw new Error({
            name: "No Token Found",
            message: "Please login"
        })
    }
    catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    verifyToken,
    encodedData
}