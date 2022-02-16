/** @jsxImportSource @emotion/react */
import { Component } from 'react';

class ResourcesPage extends Component {
  render() {
    const copy = this.props.copy;

    return (
      <div>
        {copy.default}
      </div>
    )
  }
}

export default ResourcesPage;
