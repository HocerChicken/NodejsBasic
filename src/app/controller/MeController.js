const Course = require("../Models/Course");
const {
  MongoosesToObject,
  multipleMongoosesToObject,
} = require("../../utils/mongoose");

class CourseController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([
      Course.find({}),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([courses, deletedCount]) => {
        res.render("me/stored-courses", {
          deletedCount,
          courses: multipleMongoosesToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: multipleMongoosesToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
