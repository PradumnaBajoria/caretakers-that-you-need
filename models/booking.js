const database = require("../database");
const Schema = database.Schema;

const BookingSchema = new Schema(
  {
    parents: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    child: {
      type: Schema.Types.ObjectId,
      ref: "child",
      required: true,
    },
    arrival: {
      type: Date,
      required: true,
    },
    departure: {
      type: Date,
      required: true,
    },
    clientNotes: {
      type: String,
      maxlength: 20000,
    },
    employeeNotes: {
      type: String,
      maxlength: 20000,
    },
    photos: [FileSchema],
    status: {
      type: String,
      required: true,
      enum: ["booked", "progress", "cancelled", "completed"],
    },
    cancellationNotes: {
      type: String,
      maxlength: 20000,
    },
    fee: {
      type: Number,
    },
    receipt: [FileSchema],
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

const Booking = database.model("booking", BookingSchema);

module.exports = Booking;
