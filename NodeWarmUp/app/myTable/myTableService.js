const db = require("../../dbController");

// this file will handle all business 
// logic with the database server

const readAll = () => {
    return db.executeQuery("MyTable_SelectAll", null)
        .then(result => result)
        .catch(err => console.log("error with read all", err));
}

const readById = (id) => {
    let params = [];
    db.buildParams(params, 'id', db.TYPES.Int, id);

    return db.executeQuery("MyTable_SelectById",params)
        .then(result => result)
        .catch(err => console.log("error with read all", err));
}

const post = (model) => {
    let params = [];
    db.buildParams(params, "firstName", db.TYPES.NVarChar, model.firstName);
    db.buildParams(params, "lastName", db.TYPES.NVarChar, model.lastName);
    db.buildParams(params, "dob", db.TYPES.Date, model.dob);
    db.buildParams(params, "gender", db.TYPES.Char, model.gender);
    db.buildParams(params, 'id', db.TYPES.Int, 0, true);

    return db.executeNonQuery("MyTable_Insert", params)
        .then(result => result)
        .catch(err => console.log("error with insert", err));
}

const put = (model) => {
    let params = [];
    db.buildParams(params, "firstName", db.TYPES.NVarChar, model.firstName);
    db.buildParams(params, "lastName", db.TYPES.NVarChar, model.lastName);
    db.buildParams(params, "dob", db.TYPES.Date, model.dob);
    db.buildParams(params, "gender", db.TYPES.Char, model.gender);
    db.buildParams(params, 'id', db.TYPES.Int, model.id);

    return db.executeNonQuery("MyTable_Update", params)
        .then(result => result)
        .catch(err => console.log("error update", err));
}

const deleteById = (id) => {
    let params = [];
    db.buildParams(params, 'id', db.TYPES.Int, id);
    return db.executeNonQuery("MyTable_DeleteById", params)
        .then(result => result)
        .catch(err => console.log("error update", err));
}

module.exports = {
    deleteById,
    put,
    post,
    readById,
    readAll
};
