var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var VehicleSchema = new Schema({
  make: {type: String},
  model: {required: true},
  body_style: {type: String},
  year: {type: Number},
  mileage: {type: Number},
  projects: []
});

// export the model
module.exports = mongoose.model('Vehicles', VehicleSchema, 'vehicle' );
