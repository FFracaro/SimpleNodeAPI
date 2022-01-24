const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let userDao = {
    registerUser: registerUser,
    findUserByEmail: findUserByEmail
}

prisma.$use(async (params, next) => {
    if(params.action == 'create'){
        const hash = await bcrypt.hash(params.args.data.password, 10);
        params.args.data.password = hash;
    }
    return await next (params);
})

async function registerUser(body){
    try{
        const user = await prisma.user.create({
            data: body
        });
        return user;
    }catch(err){
        return err;
    }
}

async function findUserByEmail(email){
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })
        return user;
    } catch (error) {
        return err;
    }
}

module.exports = userDao;