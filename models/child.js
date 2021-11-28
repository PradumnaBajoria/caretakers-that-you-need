const database = require("mongoose");
const Schema = database.Schema;

const ChildSchema = new Schema(
  {
    parent: {
      type: String,
      // ref: "user",
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 255,
    },
    gender: {
      gender: String,
      required: true,
      enum: ["male", "female"],
    },

    age: {
      type: String,
      required: true,
      maxlength: 255,
    },

    email: {
      type: String,
      required: true,
      maxlength: 255,
    },

    // bookings: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "booking",
    //   },
    // ],
    // createdBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
    // updatedBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
    // importHash: { type: String },
  },
  { timestamps: true }
);

const child = database.model("child", ChildSchema);

module.exports = child;
