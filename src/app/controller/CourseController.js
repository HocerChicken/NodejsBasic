const Course = require("../Models/Course");
const { MongoosesToObject } = require("../../utils/mongoose");

class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: MongoosesToObject(course) })
      )
      .catch(next);
  }
}

module.exports = new CourseController();
