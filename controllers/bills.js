const User = require('../models/user');



module.exports = {
    new: newBill,
    index
}


function newBill(req,res){
    res.render('bills/new')
}


function index(req, res){
    res.render('/', {user: req.user})
}