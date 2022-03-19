/** @jsxImportSource @emotion/react */
import { Component } from 'react';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {zip: props.zip}

    this.validate = this.validate.bind(this);
  }

  handleChange(e) {
    this.setState({zip: e.target.value});
  }

  validate() {
    //validate input

    this.props.updateZip(this.state.zip)
  }

  render() {
    return (
      <div>
        <h1>Rent Calculator</h1>
      	<p>
      	  If you received an increase, you can use our calculator to determine what the allowable increase is under the law, and if your rent increase exceeds the limit.
        </p>
        <p>
          Before using this calculator make sure you check your eligibility first!
        </p>
        <p>
          What is your zipcode?
        </p>
        <input defaultValue={this.state.zip} onChange={(e) => this.handleChange(e)} />
        <button type="button" onClick={this.validate}>Next</button>
      </div>
    )
  }
}

export default Start;
