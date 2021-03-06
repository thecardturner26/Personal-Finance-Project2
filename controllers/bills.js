const User = require('../models/user');



module.exports = {
    create,
    new: newBill,
    index,
    hub,
    online,
    other,
    utilities,
    delete: deleteOne
}



function deleteOne(req, res) {
    console.log(req.params.id);

    var bill = req.user.bills.id(req.params.id);
// remove subdoc from the guests mongoose array
bill.remove();
// save the user doc
req.user.save(function(err) {
  res.redirect('/online');
  
});
}


// function deleteOne(req, res) {
//     Bill.findByIdAndDelete(req.params.id, function(err, deletedBill) {
//         res.render('/bills/online');
//     })
// }





function create (req, res){
    req.user.bill.push(req.body);
    req.user.save().then(function(err) {
    // let bill = new Bill(req.body);
    //   bill.save(function(err){
    //         if(err) return res.render('/');
        console.log('redirect')
        
            res.redirect('/bills/online');
        })
    };




function newBill(req, res){
    res.render('bills/new', {user: req.user})
}


function hub(req, res){
    res.render('bills/hub', {user: req.user})
}


function online(req, res){
    console.log(req.user)
    res.render('bills/online', {user: req.user})
}


function other(req, res){
    res.render('bills/other', {user: req.user})
}


function utilities(req, res){
    res.render('bills/utilities', {user: req.user})
}



function index(req, res){
    res.render('/', {user: req.user})
}