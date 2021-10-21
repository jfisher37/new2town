const router = require('express').Router();
const { User, Interest, Activity } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    try {

        const friendData = await User

        res.render('friends-list');
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      } 
})

module.exports = router;