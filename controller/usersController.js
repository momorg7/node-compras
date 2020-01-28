//const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    
    async create(req, res){
        console.log(req.body)

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        User.create(user, (err, user)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(user);
            }
        });
    },

    async read(req, res){
        users = await User.find({});
        console.log(users);

        res.json(users);
    },
}