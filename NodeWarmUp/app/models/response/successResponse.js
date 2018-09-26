const baseResponse = require('./baseResponse');

class successResponse extends baseResponse {

    constructor(){
        super();
        this.isSuccessful = true;
        this.alert.type = 'success';
    }

}

module.exports = successResponse;