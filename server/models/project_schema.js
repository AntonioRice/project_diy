var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var projectSchema = new Schema({
  type: {type: String},
  date: {type: Date},
  task: {type: String},
  part_brand: {type: String},
  part_number: {type: Number},
  mileage: {type: Number},
  notes: {type: String}
});

// export the model
module.exports = mongoose.model('Projects', projectSchema, 'project');
