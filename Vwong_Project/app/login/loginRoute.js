const router = require("express").Router();
const loginController = require("./loginController")

router.post("/", loginController.login);
module.exports = router;