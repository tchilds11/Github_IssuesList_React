import React, { Component } from 'react';

 class IssueDetail extends Component {
     state = {
         issueDetails: []
     }

     async componentDidMount() {
        const { issueNumber } = this.props.match.params;
          const response = await fetch(
            `https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`
          );
          const data = await response.json();
          this.setState({
            issuesDetails: data,
        })
    }
  
    render() {
        const { issueDetails } = this.state
        return (
            <div>
                <h2>{issueDetails.title}</h2>
                <p>{issueDetails.body}</p>
            </div>
        )
    }
}

export default IssueDetail;