const db = require("../../dbController");
const crypto = require("crypto");
const authorizeService = require("../authorize/authorizeService")

const login = (info) => {
    return getLoginInfo(info.email)
    .then(res => {
        if (res[0] && res[0].salt != "" && res[0].salt != null) {
            let salt = res[0].salt;
            let role = res[1].roleName;
            let hash = hashPassword(info.password, salt);
            if (hash === res[0].password) {
                return getAllInfo(res[0].id)
                    .then(res => {
                        let allInfo = res[0];
                        if (allInfo.isAccountlocked)
                            return {
                                Success: false,
                                Item: {
                                    Message: "Account Locked"
                                }
                            };
                            if(!allInfo.isEmailConfirmed)
                                return {
                                    Success: false,
                                    Item: {
                                        Message: "E-mail is not Confirmed"
                                    }
                                };
                                let item = {
                                    Id: allInfo.id,
                                    Email: info.email,
                                    Roles: role
                                };
                                let token = authorizeService.encodeData(item);
                                if (allInfo.usingTempPassword) {
                                    item.Message = "Using Temporary Password";
                                };

                                return {
                                    Success: true,
                                    Item: item,
                                    Token: token
                                };
                    })
                    .catch(err => {
                        throw new Error("Error in getting all Info", err)
                    })
            }
        }
        return {
            Success: false,
            Item: {
                Message:"Invalid UserName / Password Combo"
            }
        }
    })
    .catch(err => {
        return {
            Success: false,
            Item: {
                Message:"Unable to login at this time"
            }
        }
    })
}

const getAllInfo = (id) => {
    let params = [];
    db.buildParams(params, "id", db.TYPES.Int, id)
    return db.executeQuery("UserBase_SelectById", params)
        .then(res => res)
        .catch(err => {throw new ("Error getting all Info", err) })
}

const getLoginInfo = (email) => {
    let params = [];
    db.buildParams(params, "email", db.TYPES.NVarChar, email)
    return db.executeQuery("GetLoginInfoByEmail", params)
    .then(result => {
        console.log("Call back result on the post : ", email);
    })    
    .catch(err => console.log("error with Login Info", err));
}
const hashPassword = (password,salt) => {
    return crypto.pbkdf2Sync(new Buffer(password), new Buffer(salt, "base64"), 1, 20, 'sha1').toString("base64");
   
}

const getUserInfo = (email, id) => {
    return getLoginInfo(email)
        .then(resp => {
            let role = resp[1].roleName;
            console.log("ROLE", role)
            return getAllInfo(id)
                .then(resp => {
                    let allInfo = resp[0];
                    console.log("allInfo", allInfo)
                    let item = {
                        Id: allInfo.id,
                        Email: email
                    };
                    return item;
                })
                .catch(err => { throw new Error("Error in retrieving User Info", err) });
        })
        .catch(err => console.log("ERROR IN GETTING LOGIN INFO"))
}
// const getPassword = (length) => {
//     return crypto.randomBytes(length).toString("base64");
// }
 
// const getSalt = (length) => {
//     return crypto.randomBytes(length).toString("base64");
// }
        // var encryptedPassword = hashPassword(email.password, result[0].salt)
        // console.log(encryptedPassword);
        // return result[0].password === encryptedPassword
 
// const login = (info) => {
//     let params = [];
//     db.buildParams(params, "email", db.TYPES.NVarChar, info.email);
//     // db.buildParams(params, "password", db.TYPES.NVarChar, info.password);
//     // db.buildParams(params, "Salt", db.TYPES.NVarChar, info.salt);
//     // db.buildParams(params, "id", db.TYPES.Int, info.id);
//     return db.executeQuery("GetLoginInfoByEmail", params)
//         .then(result => {
//             console.log("Call back result on the post", result[0].salt);
//             var encryptedPassword = hashPassword(info.password, result[0].salt)
//             console.log(encryptedPassword); 
//             return result[0].password === encryptedPassword
//         })    
//         .catch(err => console.log("error with insert", err));
// }

module.exports = {
    login,
    hashPassword,
    getUserInfo
}