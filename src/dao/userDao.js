const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

let userDao = {
    registerUser: registerUser,
    findUserByEmail: findUserByEmail
}

async function registerUser(body){
    try{
        const user = await prisma.user.create({
            data: body
            
            /*{
                name: body.name,
                email: body.email,
                password: body.password,
            }*/
        });
        console.log(user);
        return user;
    }catch(err){
        return err;
    }
}

async function findUserByEmail(email){
    /*
    const user = await User.findOne( { email } );
    return user ? true : false;    */
}

module.exports = userDao;