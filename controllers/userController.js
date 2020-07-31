const mongoose = require('mongoose');

const User = require('../models/User');


// Class for Performing Operarions

class UserController {

    // Rendering Home Page and Fetching data from database and displaying to home page

    async render_index(req, res){
        try {
            let user = await User.find();
            res.render('index',{
                users : user
            });
            
        } catch (error) {
            res.json({message:error})
        }
    };

    // Writing Data to Database


    async add_user(req, res){
        const user = new User({
            first_name : req.body.first_name,
            middle_name : req.body.middle_name,
            last_name : req.body.last_name,
            contact_number : req.body.phone
        });
        try {
            const user_save = await user.save();
        }
        catch(err){
            res.json({message:err});
        }
        res.redirect('/')
    };


    // Edit Existing Post

    async edit_user(req, res){
        try{
        let user_edit = await User.findById(req.params.userId);
        res.render('edit_index', {
            user: user_edit
        })
        }
        catch(err){
            res.json({message:err})
        }
    }

    // Updating User to Database
    async update_user(req, res){
        try {
            await User.findOneAndUpdate(req.params.userId, {
                first_name : req.body.first_name,
                middle_name : req.body.middle_name,
                last_name : req.body.last_name,
                contact_number : req.body.phone
            })
        } catch (error) {
            
        }
        res.redirect('/')
    }

    // Deleting user from database

    async delete_user(req, res){
        try {
            await User.findByIdAndRemove(req.params.userId);
            
        } catch (error) {
            res.json({message:error})
        }
        
        res.redirect('/');
    }

};




module.exports = new UserController();