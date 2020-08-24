const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../model/user');


usersRouter.post('/', async (request, response)=>{
    const body = request.body
    
    const saltRounds = 10;
    const passwordHash = await bcrype.hash(body.password, saltRounds);

    const user = new User({
        username: body.username,
        name : body.name,
        passwordHash,
    })

    const savedUser = user.save();

    response.json(savedUser);
})

module.exports = usersRouter;