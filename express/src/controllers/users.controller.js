const { response, request } = require("express");
const User = require("../models/user.model");

const getUsers = (req = request, res = response) =>{
    res.status(200).json({
        msg: "GET users"
    })
}

const createUser = (req = request, res = response) =>{
    res.status(200).json({
        msg: "POST users"
    })
}

const updateUser = (req = request, res = response) =>{
    res.status(200).json({
        msg: "PUT users"
    })
}

const deleteUser = (req = request, res = response) =>{
    res.status(200).json({
        msg: "DELETE users"
    })
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}
