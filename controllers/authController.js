const {createUser, loginCheck} = require("./userService")
require('dotenv').config()
const jwt = require('jsonwebtoken')

const CreateToken = (username, role) => {
    return jwt.sign({username, role}, process.env.JWT_SIGN_KEY, {
        expiresIn: '24h'
    })
}

async function signupPost(req,res){
    const {username, password, role} = req.body

    try{
        const user = await createUser(username, password, role)
        if(Object.keys(user).length){
            const token = CreateToken(username, user.dataValues.role)
            return res.json({token})
        }
        return res.status(502).json({message: "Error1"})
    } catch (err){
        return res.status(502).json({message: err.message})
    }
}

async function loginPost(req, res){
    const {username, password} = req.body

    try{
        const user = await loginCheck(username, password)

        if(user.length){
            const token = CreateToken(username, user.dataValue.role)
            return res.json({token})
        }
        return res.status(502).json({message: "Error"})
    }catch(err){
        return res.status(502).json({message: err.message})
    }
}

function secretGet(req,res){
    res.send("You got the secret")
}

function adminSecret(req, res){
    res.send("Darow admincik")
}

module.exports = {signupPost, loginPost, secretGet, adminSecret}