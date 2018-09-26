const db = require("../../dbController");

const readAll = () => {
    return db.executeQuery("MyTable_SelectAll", null)
    .then(result => result)
    .catch(err => reject(err)); //by forcing a reject, forces you to throw a catch in the next call
                                //if just throw err, it thinks everything was fine
}

const readById = (id) => {
    let params = [];
    db.buildParams(params, 'id', db.TYPES.Int, id);
    return db.executeQuery("MyTable_SelectById", params)
        .then(result => result)
        .catch(err => reject(err));
}

const insert = (model) => {
    let params = [];

    db.buildParams(params, "firstName", db.TYPES.NVarChar, model.firstName);
    db.buildParams(params, "lastName", db.TYPES.NVarChar, model.lastName);
    db.buildParams(params, "dob", db.TYPES.Date, model.dob);
    db.buildParams(params, "gender", db.TYPES.Char, model.gender);
    db.buildParams(params, 'id', db.TYPES.Int, 0, true); //pass true as 4th param if want output 

    return db.executeNonQuery("MyTable_Insert", params)
        .then(result => result)
        .catch(err => reject(err));

}

const update = (model) => {
    let params = [];
    db.buildParams(params, "FirstName", db.TYPES.NVarChar, model.firstName);
    db.buildParams(params, "LastName", db.TYPES.NVarChar, model.lastName);
    db.buildParams(params, "DOB", db.TYPES.Date, model.dob);
    db.buildParams(params, "Gender", db.TYPES.Char, model.gender);
    db.buildParams(params, 'Id', db.TYPES.Int, model.id);

    return db.executeNonQuery("MyTable_Update", params)
        .then(result => result)
        .catch(err => reject(err));
}

const deleteById = (id) => {
    let params = [];
    db.buildParams(params, 'id', db.TYPES.Int, id);
    return db.executeNonQuery("MyTable_DeleteById", params)
        .then(result => result)
        .catch(err => reject(err));
}

module.exports = {
    readAll,
    readById,
    insert,
    update,
    deleteById
}