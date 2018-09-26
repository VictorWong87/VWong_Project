const successResponse = require('./successResponse');

class itemsResponse extends successResponse {

    constructor(data){
        super();
        this.items = data;
    }

}

module.exports = itemsResponse;