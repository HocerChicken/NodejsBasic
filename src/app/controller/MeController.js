const Course = require("../Models/Course");
const {
  MongoosesToObject,
  multipleMongoosesToObject,
} = require("../../utils/mongoose");

class CourseController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", { courses: multipleMongoosesToObject(courses) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
