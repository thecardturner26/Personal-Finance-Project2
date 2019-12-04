const User = require('../models/user');



module.exports = {
    create,
    new: newBill,
    index,
    hub,
    online,
    other,
    utilities
}

// function create(req, res) {
//     req.body.done = false;
//     Bill.create(req.body);
//     res.redirect('/bills/online');
//   }



function create(req, res){


    var bill = new Bill(req.body);
    bill.save(function(err){
        if (err) return res.render('bills/new');
        console.log(bill);
        res.redirect('/bills/online');

    });
}

function newBill(req, res){
    res.render('bills/new')
}


function hub(req, res){
    res.render('bills/hub')
}


function online(req, res){
    res.render('bills/online')
}


function other(req, res){
    res.render('bills/other')
}


function utilities(req, res){
    res.render('bills/utilities')
}



function index(req, res){
    res.render('/', {user: req.user})
}