require('../Connection')

const User = require('../models/user.js');

async function getUser(){
    const user = await User.findOne({username: 'Pedro'});
    console.log(user)
}

getUser()