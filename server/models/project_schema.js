var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var projectSchema = new Schema({
  type: {type: String},
  task: {type: String},
  part_brand: {type: String},
  part_number: {type: Number},
  notes: {type: Number},
  mileage: {type: Number}
});

// export the model
module.exports = mongoose.model('Projects', projectSchema, 'projects');
