/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import RentTimeline from '../../components/RentTimeline';
import Button from '../../components/Button';
import ZipcodeInput from '../../components/ZipcodeInput';

const styles = {
  editRent: {
  },
  editZip: {
  }
}

class AddEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: props.calculatorState.zip,
      rent: props.calculatorState.editRent.rent,
      startDate: props.calculatorState.editRent.startDate
    }

    this.validateZip = this.validateZip.bind(this);
    this.validateRent = this.validateRent.bind(this);
  }

  handleZipChange(e) {
    this.setState({ zip: e.target.value });
  }

  handleRentChange(e) {
    this.setState({ rent: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ startDate: e.target.value });
  }

  validateZip() {
    //validate input

    this.props.updateZip(this.state.zip);
  }

  validateRent() {
    //validate input

    this.props.addRent(this.state.rent, this.state.startDate);
    this.setState({ rent: "", startDate: "" });
  }

  render() {
    if (this.props.calculatorState.editZip) {
      styles.editZip.display = "block";
      styles.editRent.display = "none";
    }
    else {
      styles.editZip.display = "none";
      styles.editRent.display = "block";
    }

    return (
      <div>
        <h1 className='rent-title'>Rent Calculator</h1>
        <div className='container'>
          <RentTimeline
            zip={this.props.calculatorState.zip}
            city={this.props.calculatorState.city}
            rentHistory={this.props.calculatorState.rentHistory}
            editZip={this.props.editZip}
            editRent={this.props.editRent}
            showMore={false}
          />
          <div css={styles.editZip}>
            <p>
              What is your zipcode?
            </p>
            <input value={this.state.zip} onChange={(e) => this.handleZipChange(e)} />
            <Button type="button" onClick={this.validateZip} btnType={'primarybtn'} text={'Next'} />
          </div>
          <div className='input-container'>
            <p>
              What {this.props.calculatorState.rentHistory.length === 0 ? "is your newest" : "was your previous"} rent total?
            </p>
            <div className="input-icon">
              <input value={this.state.rent} onChange={(e) => this.handleRentChange(e)} />
              <i>$</i>
            </div>

            <p>
              What is the start date of {this.props.calculatorState.rentHistory.length === 0 ? "the rent increase" : "your previous rent"}?
            </p>
            <input placeholder="MM/DD/YYYY" value={this.state.startDate} onChange={(e) => this.handleDateChange(e)} />
            <Button
              type="button"
              onClick={this.validateRent}
              btnType={'primarybtn'}
              text={this.props.calculatorState.rentHistory.length === 0 ? "Next" : "Calculate"} />

          </div>

        </div>
      </div>
    )
  }
}

export default AddEdit;
