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


function create (req, res){
    req.user.bill.push(req.body);
    req.user.save().then(function(err) {
    // let bill = new Bill(req.body);
    //   bill.save(function(err){
    //         if(err) return res.render('/');
            res.redirect('/bills/online');
        })
    };



// function create(req, res){
//     req.body.name = !!req.body.name;
//     req.body.price = req.body.price.replace(/\s*,\s*/g, ',');
//     if (req.body.name) req.body.name = req.body.name.split(',');
//     for (let key in req.body){
//         if (req.body[key] === '') delete req.body[key]
//     }


//     var bill = new Bill(req.body);
//     bill.save(function(err){
//         if (err) return res.render('bills/online');
//         console.log(bill);
//         res.redirect('/bills');

//     });
// }




function newBill(req, res){
    res.render('bills/new', {user: req.user})
}


function hub(req, res){
    res.render('bills/hub', {user: req.user})
}


function online(req, res){
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