const database = require("mongoose");
const Schema = database.Schema;

const BookingSchema = new Schema(
  {
    parents: {
      type: String,
      // ref: "user",
      required: true,
    },
    child: {
      type: String,
      // ref: "child",
      required: true,
    },
    arrival: {
      type: String,
      // required: true,
    },
    departure: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 255,
    },
    advise: {
      type: String,
      // required: true,
      maxlength: 255,
    },
    // clientNotes: {
    //   type: String,
    //   maxlength: 20000,
    // },
    // employeeNotes: {
    //   type: String,
    //   maxlength: 20000,
    // },
    // photos: [FileSchema],
    status: {
      type: String,
      required: true,
      enum: ["booked", "progress", "cancelled", "completed"],
    },
    // cancellationNotes: {
    //   type: String,
    //   maxlength: 20000,
    // },
    fee: {
      type: Number,
    },
    // receipt: [FileSchema],
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

const Booking = database.model("booking", BookingSchema);

module.exports = Booking;
