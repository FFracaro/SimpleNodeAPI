const userDao = require('../dao/userDao')

const userController = {
    createUser,
    findOneUserByEmail
}

async function createUser(req, res){
    /*if((await userDao.findUserByEmail(req.body.email))){
        return res.status(400).send( { error: 'Email already registered.' } );
    }*/
    //console.log(req.body);

    userDao.registerUser(req.body).then(user => {
        return res.send( { user } );
    }).catch(err => {
        return res.status(400).send( { error: 'Registration proccess failed' } );
    });
}

async function findOneUserByEmail(req, res){
    const user = await userDao.findUserByEmail(req.body.email);
    return user ? { user } : res.status(400).send( { error: 'User not found.' } );
}

module.exports = userController;