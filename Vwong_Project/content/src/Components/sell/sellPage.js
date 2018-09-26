import React, { Component } from 'react';
import { TicketmasterApi } from '../TicketmasterApi/TicketmasterApi';
import * as moment from 'moment';

import { SellLayout } from './sellLayout';

class SellPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        artist: '',
        city: '',
        date: ''
      },
      inputDate: ''
    }
  }

  componentDidMount() {

  }

  onClickSearch = () => {
    TicketmasterApi.getEvents(this.state.event.event)
      .then(response => {
        console.log(response);
        // this.setState({
        //     ...this.state,
        //     ddlPlanOptions: ddl,
        // })
      })
      .catch(err => console.log("Error:", err));
  }

  onChangeInput = (onChange) => (e) => {
    onChange(e.target.name, e.target.value);
  }

  onChange = (fieldName, fieldValue) => {

    let nextState = {
      ...this.state,
      event: {
        ...this.state.event,
        [fieldName]: fieldValue
      }
    }
    this.setState(nextState, () => console.log(nextState));
  }

  onDateChange = (fieldName, fieldValue) => {

    let date = moment(fieldValue, 'YYYY-MM-DDThh:mm').format('YYYY-MM-DDThh:mm').toString() + ':00Z'; //string => date
    let nextState = {
      ...this.state,
      event: {
        ...this.state.event,
        date: date
      },
      inputDate: fieldValue
    }
    this.setState(nextState, () => console.log(nextState));
  }

  render() {
    return (
      <React.Fragment>
        <SellLayout
          event={this.state.event}
          date={this.state.inputDate}
          onChange={this.onChange}
          onDateChange={this.onDateChange}
          onClickSearch={this.onClickSearch}
        />

      </React.Fragment>
    );
  }
}

export default SellPage;
