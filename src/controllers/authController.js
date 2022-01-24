const userController = require('./userController');
const bcrypt = require('bcryptjs');

const authController = {
    authUser: authUser
}

async function authUser(req, res){
    const user = userController.findOneUserByEmail(req.body.email);

    if(!user){
        return res.status(400).send( { error: 'User not registered.' } );
    }

    if(!(await bcrypt.compare(res.body.password, user.password))){
        return res.status(400).send( { error: 'Email or password invalid.' } );
    }

    
    return res.send(user);
}

module.exports = authController;