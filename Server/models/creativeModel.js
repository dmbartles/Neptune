var mongoose = require('mongoose');

// access schema constructor
var Schema = mongoose.Schema;

// create new schema for creatives
var schema = new Schema({
  name: {type: String, required: true},
  lob: {type: String, required: true},
  resFam: {type: String, required: false},
  status: {type: String, required: false},
  supplier: {type: String, required: false},
  miscCharges: [{ miscCharge: String, required: false}],
  printMethod : {type: String, required: false},
  estVolume: {type: String, required: false},
  simplexDuplex: {type: String, required: false},
  height: {type: String, required: false},
  inserts: {type: String, required: false},
  actualVolume: {type: String, required: false},
  estCost: {type: String, required: false},
  actualCost: {type: String, required: false},
  testingCode: {type: String, required: false},
  testingCodeCreativeName: {type: String, required: false},
  month: {type: String, required: true},
  week: {type: String, required: true},
  email: {type: String, required: true},
  comments: [{ commentBody: String, required: false,
  commentedAt: Date, required: false }],
  createdAt: {type: Date},
  updatedAt: {type: Date}
});

// export name and schema
module.exports = mongoose.model("Creative", schema);
