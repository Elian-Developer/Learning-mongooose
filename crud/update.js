require('../Connection');

const User = require('../models/user')

const handleUpdate = async() => {
    const user = await User.findOne({username: 'Pedro'});
    console.log(user);
    user.password = 'newSecurePassword'
    user.save()
}


const userUpdated = async() => {

    const user = await User.updateOne({username: 'Elian'}, {password: 'securepassword'});

    console.log(user);
}

handleUpdate();