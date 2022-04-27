/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import { Link } from 'react-router-dom';
import RentTimeline from '../../components/RentTimeline';
import RentAlert from '../../components/RentAlert';

class Results extends Component {
  render() {
    return (
      <div>
        <h1>Rent Calculator</h1>
        <RentTimeline
          zip={this.props.zip}
          rentHistory={this.props.rentHistory}
          addMoreRent={this.props.addMoreRent}
          editZip={this.props.editZip}
          editRent={this.props.editRent}
          showMore={true}
        />
        <RentAlert
          city={this.props.city}
          rentHistory={this.props.rentHistory}
        />
        <p>
          Having issues with your tenancy?
        </p>
        <button type="button"><Link to="../resources">Get Help Now</Link></button>
        <button type="button"><Link to="../eligibility">Take Eligibility Quiz</Link></button>
        <button type="button"><Link to="../">Home</Link></button>
      </div>   
    )
  }
}

export default Results;
