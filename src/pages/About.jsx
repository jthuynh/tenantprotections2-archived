/** @jsxImportSource @emotion/react */
import { Component } from 'react';

class AboutPage extends Component {
  render() {
    const copy = this.props.copy;

    return (
      <div>
        {copy.default}
      </div>
    );
  }
}

export default AboutPage;
