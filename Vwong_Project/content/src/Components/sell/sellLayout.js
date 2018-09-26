import React from 'react';
import { Input } from '../Common/input';
import { Button } from '../Common/button';



export const SellLayout = (props) => {

    return (
        <React.Fragment>
            <div className="col-5">
                <div className="card mp-3 mb-4">
                    <div className="card-body" style={{ background: '-webkit-linear-gradient(45deg, #00dbde, #fc00ff)' }}>
                        <div className="form-group">
                            <form>
                                <Input
                                    name="artist"
                                    labelStyle={{ fontStyle: 'bold' }}
                                    label="What artist are these tickets for?"
                                    placeholder="BTS"
                                    value={props.event.artist}
                                    onChange={props.onChange}
                                    className="form-control"
                                    style={{ width: '70%' }}
                                />
                                <Input
                                    name="city"
                                    label="In what city?"
                                    placeholder="Los Angeles"
                                    value={props.event.city}
                                    onChange={props.onChange}
                                    className="form-control"
                                    style={{ width: '70%' }}
                                />
                                <Input
                                    type="datetime-local"
                                    name="inputDate"
                                    label="Which day?"
                                    value={props.date}
                                    onChange={props.onDateChange}
                                    className="form-control"
                                    style={{ width: '70%' }}
                                />
                                <Button
                                    className="btn btn-primary waves-effect"
                                    label="Go"
                                    onClick={props.onClickSearch}
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


