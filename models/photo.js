const { Schema, model } = require("mongoose");

const photoSchema =
  Schema();
  // { data: { type: Array } }
  // { versionKey: false, timestamps: true }

const Photo = model("photo", photoSchema);

module.exports = {
  Photo,
};
