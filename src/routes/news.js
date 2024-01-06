const express = require("express");
const NewsController = require("../app/controller/NewsController");
const router = express.Router();

router.get("/:slug", NewsController.show);
router.get("/", NewsController.index);

module.exports = router;
