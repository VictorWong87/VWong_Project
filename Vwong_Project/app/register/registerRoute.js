const router = require("express").Router();
const registerController = require("./registerController")

router.post("/", registerController.register);
router.get("/", registerController.registerGetAll);
router.get("/:id", registerController.registerGetById);

module.exports = router;