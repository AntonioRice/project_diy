var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var vehicleSchema = new Schema({
  name:{type: String},
  identifier: {type: String}, // user._id
  username: {type: String}, // user.username //not good
  year: {type: Number},
  make: {type: String},
  model: {},
  body_style: {type: String},
  mileage: {type: Number}
});

// export the model
module.exports = mongoose.model('Vehicles', vehicleSchema, 'vehicle' );
