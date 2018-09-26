class baseResponse {

    constructor(){
        this.isSuccessful = false;
        this.alert = {
            message: null,
            type: null
        };
    }

}

module.exports = baseResponse;