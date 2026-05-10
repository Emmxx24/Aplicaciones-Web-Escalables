const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyJWT = async (req = request, res = response, next) => {
    const token = req.header("Authorization");

    console.log("Revisando token");
    if (!token) {
        return res.status(401).json({
            msg: "Token invalido"
        })
    }
    try{
        //username viene del token, podriamos utilizar tambien role porque el token contiene tambien esa info
        const { username } = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ username: username});
        if (!user) {
            return res.status(401).json({
                msg: "Token invalido"
            })
        }
        req.activeUserRole = user.role;
        next();
    } catch (error){
        console.log(error);
        return res.status(401).json({
            msg: "Token invalido"
        })
    }
}

module.exports = {
    verifyJWT
}