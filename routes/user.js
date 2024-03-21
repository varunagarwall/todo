const express=require('express');

const router =express.Router();

const userController=require('../controllers/user_Profile_controller');


module.exports=router;

router.get('/profile',userController.profile);
