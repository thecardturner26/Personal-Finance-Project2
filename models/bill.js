var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const bills = [
    {name: 'water', price: '10', dueDate: '', category: 'online'}
   
  ];


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


module.exports = {
    getAll,
    getOne,
    create
  };
  
  function create(bill) {
    todos.push(bill);
  }
  
  function getOne(id) {
    return bills[id];
  }
  
  function getAll() {
    return bills;
  }


module.exports = mongoose.model('Bill', billSchema);