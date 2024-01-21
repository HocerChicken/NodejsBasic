const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: "string" },
    description: { type: "string" },
    image: { type: "string" },
    videoId: { type: "string" },
    level: { type: "string" },
    slug: { type: "string", slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
