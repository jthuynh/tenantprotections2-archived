/** @jsxImportSource @emotion/react */
import { Component } from 'react';

class CalculatorPage extends Component {
  render() {
    const copy = this.props.copy;

    return (
      <div>
        {copy.default}
      </div>
    )
  }
}

export default CalculatorPage;
