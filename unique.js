require('./Connection')

const User = require('./models/user');

async function createUsers(){
    const userOne = new User({
        username: 'Pedro',
        password: '123456'
    })

    await userOne.save()

    const userTwo = new User({
        username: 'Emilio',
        password: 'sec123456'
    })

    await userTwo.save()
}

createUsers();