const userDao = require('../dao/userDao')

const userController = {
    createUser,
    findOneUserByEmail
}

async function createUser(req, res){
    if((await userDao.findUserByEmail(req.body.email))){
        return res.status(400).send( { error: 'Email already registered.' } );
    }

    userDao.registerUser(req.body).then(user => {
        user.password = undefined;
        return res.send( { user } );
    }).catch(err => {
        return res.status(400).send( { error: 'Registration proccess failed.' } );
    });
}

async function findOneUserByEmail(req, res){
    return await userDao.findUserByEmail(req.body.email);
}

module.exports = userController;