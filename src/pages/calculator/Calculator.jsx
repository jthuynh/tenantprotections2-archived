/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import Start from './Start';
import AddEdit from './AddEdit';
import Results from './Results';

const START = 1;
const ADDEDIT = 2;
const RESULTS = 3;

class CalculatorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: null,
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
            rentHistory={this.state.rentHistory}
            addMoreRent={this.addMoreRent}
            editRent={this.editRent}
            editZip={this.editZip}
          />
        )
    }
  }

  getNextStep(rentHistory) {
    if (rentHistory.length > 1) {
      return RESULTS;
    }
    else {
      return ADDEDIT;
    }
  }

  updateZip(zip) {
    this.setState({zip: zip, currentStep: this.getNextStep(this.state.rentHistory), editZip: false});
  }

  editZip() {
    this.setState({editZip: true, currentStep: ADDEDIT});
  }

  addRent(rent, startDate) {
    let rentHistory = [...this.state.rentHistory, {rent: rent, startDate: startDate}];
    rentHistory.sort((a, b) => a.startDate < b.startDate ? 1 : -1);

    this.setState({rentHistory: rentHistory, currentStep: this.getNextStep(rentHistory)});
  }

  editRent(editRent, editStartDate) {
    let rentHistory = [];
    this.state.rentHistory.map(({rent, startDate}) => {
      if (startDate !== editStartDate) {
        rentHistory.push({rent: rent, startDate: startDate});
      }
      return null;
    });

    this.setState({rentHistory: rentHistory, editRent: {rent: editRent, startDate: editStartDate}, currentStep: ADDEDIT});
  }

  addMoreRent() {
    this.setState({currentStep: ADDEDIT});
  }
}

export default CalculatorPage;
