const sucessResponse = require('./successResponse');

class itemResponse extends sucessResponse {

    constructor(data){
        super();
        this.item = data;
    }
}

module.exports = itemResponse;