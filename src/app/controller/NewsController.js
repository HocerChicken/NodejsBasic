class NewsController {
    //[GET] /news
    index(req, res) {
        res.render("news");
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send("Hello Slug in news");
    }
}

module.exports = new NewsController();
