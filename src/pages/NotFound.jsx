/** @jsxImportSource @emotion/react */
import { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    const copy = this.props.copy;

    return (
      <div>
        {copy.default}
      </div>
    )
  }
}

export default NotFoundPage;
