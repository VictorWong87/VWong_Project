const router = require("express").Router();

const fakeApiRead = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                msg:"Read executed",
                msgId: 1,
                isSuccessfull: true
            });
        }, 5000);
    });
}

const readAll = async (req, res) => {
    let response = await fakeApiRead();
    res.send(response);
}

router.get("/", readAll);


module.exports = router;