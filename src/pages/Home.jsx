/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    const copy = this.props.copy;

    return (
      <>
        <div>
          {copy.default}
        </div>
        <div>
          <Link to="../calculator">{copy.exampleLink}</Link>
        </div>
      </>
    )
  }
}

export default HomePage;
