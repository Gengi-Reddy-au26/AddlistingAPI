const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    maxLength: 200,
  },
  images: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  base_price: {
    type: Number,
    required: true,
  },
  allow_instant_booking: {
    type: Boolean,
    default : false
  },
  Greate_for : {
    type : String,
  },
  Regions : {
    type : String
  },
  Group_size : {
    type : String
  },
  numberOfGuests : {
    type : Number
  },
  price_per_each_additional_guests: {
    type: Number,
  },
  minimum_numberof_hours_per_reservation: {
    type: String,
  },
  maximum_numberof_hours_per_reservation: {
    type: Number,
  },
  appointmentDuration: {
    type: Number,
  },
  time_between_appointment: {
    type: String,
  },
  recurring_period : {
    type : Boolean
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date
  }
}
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
