import React from 'react';

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Issue';
  }
  componentDidMount() {
    console.log(this.props);
    document.title = "Issue";
    pageTitle.innerHTML = "Issue";
  }
  render() {
    return <div>Issue </div>;
  }
}

export default Issue;
