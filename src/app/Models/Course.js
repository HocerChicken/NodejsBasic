const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: "string", unique: true },
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

//Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });

module.exports = mongoose.model("Course", Course);
