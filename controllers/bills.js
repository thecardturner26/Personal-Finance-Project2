const User = require('../models/user');



module.exports = {
    create,
    new: newBill,
    index
}


function create(req, res){
    req.body.nowShowing = !!req.body.nowShowing;
    req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    if (req.body.cast) req.body.cast = req.body.cast.split(',');
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key]
    }


    var bill = new Bill(req.body);
    bill.save(function(err){
        if (err) return res.render('bills/new');
        console.log(bill);
        res.redirect('/bills');

    });
}

function newBill(req, res){
    res.render('bills/new')
}


function index(req, res){
    res.render('/', {user: req.user})
}