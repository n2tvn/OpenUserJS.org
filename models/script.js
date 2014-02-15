var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scriptSchema = new Schema({
  name: String,
  about: String,
  installs: Number,
  rating: Number,
  installable: Boolean,
  installName: String,
  updated: Date,
  meta: Object,
  _authorId: Schema.Types.ObjectId
});

var Script = mongoose.model('Script', scriptSchema);

exports.Script = Script;