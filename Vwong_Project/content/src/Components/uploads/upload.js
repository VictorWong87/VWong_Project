import React from "react";

class Uploads extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <React.Fragment>
                <form action="/user/uploads" enctype="multipart/form-data" method="POST"> 
                <input type="file" name="fileUpload" />
                <input type="submit" value="File Upload"/>
                </form><br/>
            </React.Fragment>
        )
    }
}
export default Uploads