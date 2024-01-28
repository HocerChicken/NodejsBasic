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

  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `http://i3.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: MongoosesToObject(course) });
      })
      .catch(next);
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController();
