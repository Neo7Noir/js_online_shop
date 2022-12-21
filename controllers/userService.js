const {User} = require("../models")
require("mysql2")
const bcrypt = require("bcrypt")

async function if_user(username){
    const users = await User.findAll({where :{
        username : username
    }})

    return users
}

async function createUser(username, password, role){
    const users = await if_user(username)

    if(users.length){
        throw new Error("Username already exists!")
    }

    const hashPass = await bcrypt.hash(password, 10)

    const user = await User.create({
        username : username,
        password : hashPass,
        role: role
    }).catch((err) => {
        if(err) throw new Error("Creating error")
    })

    return user
}

async function loginCheck(username, password){
    const users = await if_user(username)
    if(users.length){

        let comparePassword = bcrypt.compareSync(password, users[0].dataValues.password)
        if(!comparePassword) throw new Error("Incorrect Password")
    }
    else throw new Error("Incorrect Username")

    return users
}

module.exports = {createUser, loginCheck}