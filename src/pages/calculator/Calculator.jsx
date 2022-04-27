/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import Start from './Start';
import AddEdit from './AddEdit';
import Results from './Results';
import { zipLookup, rentcapLookup } from '../../assets/data/';

const START = 1;
const ADDEDIT = 2;
const RESULTS = 3;

class CalculatorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: null,
      city: null,
      rentHistory: [],
      currentStep: START,
      editZip: true,
      editRent: {rent: "", startDate: ""}
    }

    this.updateZip = this.updateZip.bind(this);
    this.editZip = this.editZip.bind(this);
    this.addRent = this.addRent.bind(this);
    this.editRent = this.editRent.bind(this);
    this.addMoreRent = this.addMoreRent.bind(this);
  }

  render() {
    switch( this.state.currentStep ) {
      default: //case: START
        return (
          <Start
            state={this.state.zip}
            updateZip={this.updateZip}
          />
        )
      case ADDEDIT:
        return (
          <AddEdit
            calculatorState={this.state}
            addRent={this.addRent}
            editRent={this.editRent}
            updateZip={this.updateZip}
            editZip={this.editZip}
          />
        )
      case RESULTS:
        return (
          <Results
            zip={this.state.zip}
            city={this.state.city}
            rentHistory={this.state.rentHistory}
            addMoreRent={this.addMoreRent}
            editRent={this.editRent}
            editZip={this.editZip}
            city={this.state.city}
          />
        )
    }
  }

  // state variable edit functions

  updateZip(zip) {
    console.log(zipLookup(zip));
    this.setState({zip: zip, city: zipLookup(zip), currentStep: this.getNextStep(this.state.rentHistory), editZip: false});
  }

  addRent(rent, startDate) {
    let rentHistory = [...this.state.rentHistory, {rent: rent, startDate: startDate, maxIncrease: this.getMaxIncrease(startDate)}];
    rentHistory.sort((a, b) => a.startDate < b.startDate ? 1 : -1);

    this.setState({rentHistory: rentHistory, currentStep: this.getNextStep(rentHistory)});
  }

  // ---

  // pagestate change functions

  editZip() {
    this.setState({editZip: true, currentStep: ADDEDIT});
  }

  editRent(editRent, editStartDate) {
    let rentHistory = [];
    this.state.rentHistory.map(({rent, startDate, maxIncrease}) => {
      if (startDate !== editStartDate) {
        rentHistory.push({rent: rent, startDate: startDate, maxIncrease: maxIncrease});
      }
      return null;
    });

    this.setState({rentHistory: rentHistory, editRent: {rent: editRent, startDate: editStartDate}, currentStep: ADDEDIT});
  }

  addMoreRent() {
    this.setState({currentStep: ADDEDIT});
  }

  // ---

  // helpers

  getNextStep(rentHistory) {
    if (rentHistory.length > 1) {
      return RESULTS;
    }
    else {
      return ADDEDIT;
    }
  }

  getMaxIncrease(startDate) {
    return rentcapLookup(this.state.city, startDate);
  }
}

export default CalculatorPage;
