const database = require("../database");
const Schema = database.Schema;

const ChildSchema = new Schema(
  {
    parent: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 255,
    },
    type: {
      gender: String,
      required: true,
      enum: ["male", "female"],
    },

    age: {
      type: String,
      required: true,
      maxlength: 255,
    },

    bookings: [
      {
        type: Schema.Types.ObjectId,
        ref: "booking",
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    importHash: { type: String },
  },
  { timestamps: true }
);

const child = database.model("child", ChildSchema);

module.exports = child;
