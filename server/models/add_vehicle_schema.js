var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var VehicleSchema = new Schema({
  make: {type: String, required: true},
  model: {required: true},
  body_style: {type: String, required: true},
  year: {type: Number, required: true},
  mileage: {type: Number, required: true},
  projects: []
});

// export our model
module.exports = mongoose.model('Vehicles', vehicleSchema, 'vehicle' );
