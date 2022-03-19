/** @jsxImportSource @emotion/react */
import { Component } from 'react';

class RentTimeline extends Component {
  render() {
    let counter = 0;

    return (
      <ul>
        <li key={counter}>
          zipcode: {this.props.zip}, [city]&nbsp;
          <button type="button" onClick={() => this.props.editZip()}>Edit</button>
        </li>
        {
          this.props.rentHistory.map(({rent, startDate}) => {
            return <li key={counter++}>
              date: {startDate}, rent: ${rent}&nbsp;
              <button type="button" onClick={() => this.props.editRent(rent, startDate)}>Edit</button>
            </li>
          })
        }
        {
          this.props.showMore ?
            <li key={counter}>
              Did your rent increase more than once?&nbsp;
              <button type="button" onClick={() => this.props.addMoreRent()}>Yes, add more</button>
            </li>
          : null
        }
      </ul>
    );
  }
}

export default RentTimeline;