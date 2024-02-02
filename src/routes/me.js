const express = require("express");
const meController = require("../app/controller/MeController");
const router = express.Router();

router.get("/stored/courses", meController.storedCourses);
router.get("/trash/courses", meController.trashCourses);

module.exports = router;
