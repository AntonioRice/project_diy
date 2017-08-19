var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var projectSchema = new Schema({
  img:{},
  identifier: {type: String}, // vehicle._id
  username: {type: String}, // user.username - should be user._id
  type: {type: String},
  date: {type: String},
  task: {type: String},
  part_brand: {type: String},
  part_number: {type: Number},
  mileage: {type: Number},
  notes: {type: String},
  shop: {type: String},
  dueMileage: {type: Number},
  cost:{type: Number},
  quote:{type: Number}
});

// export the model
module.exports = mongoose.model('Projects', projectSchema, 'project');
