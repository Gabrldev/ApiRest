const mongoose = require("mongoose");
const MongooseDelete = require("mongoose-delete");

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    fileName: {
        type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

StorageSchema.plugin(MongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("storage", StorageSchema);
