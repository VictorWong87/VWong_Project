const loginService = require("./loginService");
const responses = require("../models/response")

const login = (req, res) => {
    loginService.login(req.body)
        .then(result => {
            res.json(new responses.itemResponse(result))
        })
        .catch(err => {
            res.status(500).send(new responses.errorResponse(err))
        });
}

module.exports = {
    login
}