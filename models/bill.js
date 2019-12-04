var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var billSchema = new Schema ({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    dueDate: {
        type: Date
    },
    category: {
        type: String
    }
})


module.exports = mongoose.model('Bill', billSchema);