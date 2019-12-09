var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const bills = [
    {name: 'water', price: '10', dueDate: '', category: 'online'}
   ];


// module.exports = {
//     getAll,
//     getOne,
//     create
//   };
  
//   function create(bill) {
//     todos.push(bill);
//   }
  
//   function getOne(id) {
//     return bills[id];
//   }
  
//   function getAll() {
//     return bills;
//   }


module.exports = mongoose.model('Bill', billSchema);