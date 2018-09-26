const baseResponse = require('./baseResponse');

class errorResponse extends baseResponse {

    constructor(err){
        super();
        this.isSuccessful = false;
        this.errors = err;
        this.alert.type = 'danger';
    }

}

module.exports = errorResponse;