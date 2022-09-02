const { request, response } = require('express');


const usersGet = (req=request, res = response) => {

    const {q,id,name="?"} = req.query;

    res.json({
        msg: "get Holi -- controller",
        q,id,name
    });
}

const usersPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: "post Holi -- controller",
        body
    })
}

const usersPut = (req, res = response) => {

    const {id} = req.params;

    res.status(201).json({
        msg: "put Holi -- controller",
        id
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: "patch Holi -- controller"
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: "delete Holi -- controller"
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}