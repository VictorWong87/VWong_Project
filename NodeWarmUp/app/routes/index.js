const router = require("express").Router();
const errorHandler = require("../handlers/errorHandlers");
const demoController = require("../demo/demoController");
const myTableRoutes = require("../myTable/myTableRoutes");
const myTableRoutes2 = require("../myTable2/myTableRoutes")

// setup routing prefixes with controllers
router.use("/api/demo", demoController);
router.use("/api/mytables", myTableRoutes);
router.use("/api/mytables2", myTableRoutes2);
//router.use("/api/login", loginRoutes);


// register handler for 404 errors
router.use(errorHandler.notFound);

// register handler for error messages
router.use(errorHandler.developmentErrors);

module.exports = router;