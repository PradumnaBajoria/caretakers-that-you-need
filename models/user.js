const database = require("mongoose");
const Schema = database.Schema;

const UserSchema = new Schema(
  {
    Name: { type: String, maxlength: 80 },
    // lastName: { type: String, maxlength: 175 },
    phoneNumber: { type: String, maxlength: 24 },
    email: { type: String, maxlength: 255 },
    gender: {
      gender: String,
      // required: true,
      enum: ["male", "female"],
    },
    age: {
      type: String,
      required: true,
      maxlength: 255,
    },
    experience: {
      type: String,
      // required: true,
      maxlength: 255,
    },
    // authenticationUid: { type: String, maxlength: 255 },
    // disabled: { type: Boolean, default: false },
    // avatars: [FileSchema],
    // roles: [{ type: String }],
    // createdBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
    // updatedBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
    // importHash: { type: String, maxlength: 255 },
  },
  { timestamps: true }
);



const User = database.model('user', UserSchema);

module.exports = User;
