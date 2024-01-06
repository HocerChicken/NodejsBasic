const Course = require("../Models/Course");
const { multipleMongoosesToObject } = require("../../utils/mongoose");

// site, home page
class SiteController {
    //[GET]
    index(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render("home", {
                    courses: multipleMongoosesToObject(courses),
                })
            )
            .catch(next);
    }
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
