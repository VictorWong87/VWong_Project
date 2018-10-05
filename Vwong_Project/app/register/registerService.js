const db = require("../../dbController");
const loginService = require("../login/loginService");
const crypto = require("crypto");
// const nodemailer = require("nodemailer");

const register = (info) => {
    let params = [];
    let salt = getSalt(15);
    // let password = getpassword(64);
    db.buildParams(params, "Id", db.TYPES.Int, info.id);
    db.buildParams(params, "FirstName", db.TYPES.NVarChar, info.firstName);
    db.buildParams(params, "MiddleName", db.TYPES.NVarChar, info.middleName);
    db.buildParams(params, "LastName", db.TYPES.NVarChar, info.lastName);
    db.buildParams(params, "Email", db.TYPES.NVarChar, info.email);
    db.buildParams(params, "Password", db.TYPES.NVarChar, loginService.hashPassword(info.password , salt));
    db.buildParams(params, "gender", db.TYPES.NVarChar, info.gender);
    db.buildParams(params, "phoneNumber", db.TYPES.NVarChar, info.phoneNumber);
    db.buildParams(params, "zipCode", db.TYPES.NVarChar, info.zipCode);    
    db.buildParams(params, "Salt", db.TYPES.NVarChar, salt);
    console.log(info)
    // db.buildParams(params, "signUpType", db.TYPES.NVarChar, "Student");
    // db.buildParams(params, "GUID", db.TYPES.NVarChar, null, true);
    return db.executeNonQuery("UserBase_Insert", params)
    // .then(res => {
    //     let guid = res.GUID || null;
    //     if (guid) {
    //         var transporter = nodemailer.createTransport({
    //             service: 'gmail',
    //             auth: {
    //                 user: "yellowfever619@gmail.com",
    //                 pass: "thevictor"
    //             }
    //         });
    //         var mailOptions = {
    //             from: "Me",
    //             to: info.email,
    //             subject: "Welcome to Eleveight! Please confirm your email..",
    //             html: templates.getHtml(info.firstName, "http://localhost:3000/api/register", guid, "")
    //         }
    //         transporter.sendMail(mailOptions, function (error, res) {
    //             if (error) {
    //                 console.log(error);
    //             } else {
    //                 console.log('Email sent: ' + res.response);
    //             }
    //         });
    //     }
    //     return guid;

    // })
    .catch(err => console.log("Error in creating new user", err))
}

const registerGetAll = () => {
    return db.executeQuery("UserBase_SelectAll", null)
        .then(result => {
            console.log("Call back result on the Post", result)
            return result
        })  
        .catch(err => console.log("error with read all", err));
}

const registerGetById = (id) => {
    let params = [];
    db.buildParams(params, 'id', db.TYPES.Int, id);

    return db.executeQuery("UserBase_SelectById", params)
        .then(result => result)
        .catch(err => console.log("error with get all", err));
}

const getSalt = (length) => {
    return crypto.randomBytes(length).toString("base64");
}

module.exports = {
    // getpassword,
    // passwordHash,
    getSalt,
    register,
    registerGetAll,
    registerGetById
}