require('dotenv').config()
const jwt = require('jsonwebtoken')

function checkToken(bearerToken){
    if(!bearerToken)  return false

    const token = bearerToken.split(' ')[1]
    if(!token)  return false

    return token
}

function checkUser(req, res, next){
    const token = checkToken(req.headers.authorization)
    if(!token) return res.json({message: "Not Authorized!"})

    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SIGN_KEY)
        req.user = decodedToken
        next()
    } catch(err) {
        res.json({message: "Wrong token"})
    }
}

function checkRole(role){
    return function(req, res, next){
        const token = checkToken(req.headers.authorization)

        if(!token) return res.json({message: "Not Authorized!"})
    
        try{
            const decodedToken = jwt.verify(token, process.env.JWT_SIGN_KEY)

            if(decodedToken.role !== role)  return res.json({message: "You dont have permission"})

            req.user = decodedToken
            next()
        } catch(err) {
            return res.json({message: "Wrong token"})
        }
    }
}

module.exports = {checkUser, checkRole}