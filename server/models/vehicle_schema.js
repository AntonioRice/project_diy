var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var vehicleSchema = new Schema({
  username: {type: String},
  year: {type: Number},
  make: {type: String},
  model: {},
  body_style: {type: String},
  mileage: {type: Number},
  services: []
});

// export the model
module.exports = mongoose.model('Vehicles', vehicleSchema, 'vehicle' );
