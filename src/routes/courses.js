const express = require("express");
const courseController = require("../app/controller/CourseController");
const router = express.Router();

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.delete);
router.get("/:slug", courseController.show);

module.exports = router;
