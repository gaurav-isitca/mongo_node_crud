const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


// Adding Different routes

router.get('/', UserController.render_index);
router.post('/save', UserController.add_user);
router.get('/edit/:userId', UserController.edit_user);
router.post('/update/:userId', UserController.update_user);
router.get('/delete/:userId', UserController.delete_user);

module.exports = router;