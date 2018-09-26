const router = require("express").Router();
const myTableController = require("./myTableController");

router.get("/", myTableController.readAll);
router.get("/:id", myTableController.readById);
router.post("/", myTableController.post);
router.put("/:id", myTableController.put);
router.delete("/:id", myTableController.deleteById);

module.exports = router;