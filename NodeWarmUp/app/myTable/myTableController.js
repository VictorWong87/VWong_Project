const myTableService = require("./myTableService");
const responses = require("../models/response");

const readAll = (req, res) => {
    myTableService.readAll()
        .then(result => res.json(new responses.itemsResponse(result)))
        .catch(err => res.status(500).send(new responses.errorResponse(err)));
}

const readById = (req, res) => {
    myTableService.readById(req.params.id)
        .then(result => res.json(new responses.itemResponse(result)))
        .catch(err => rres.status(500).send(new responses.errorResponse(err)));
}

const post = (req, res) => {
    myTableService.post(req.body)
        .then(result => res.json(new responses.itemResponse(result)))
        .catch(err => res.status(500).send(new responses.errorResponse(err)));
}

const put = (req, res) => {
    myTableService.put(req.body)
        .then(result => res.json(new responses.successResponse()))
        .catch(err => res.status(500).send(new responses.errorResponse(err)));
}

const deleteById = (req, res) => {
    myTableService.deleteById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(new responses.errorResponse(err)));
}

module.exports = {
    readAll,
    readById,
    post,
    put,
    deleteById
}

