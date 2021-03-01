import React, { Component } from "react";
import Issue from './Issue';

class IssueList extends Component {
    constructor(props) {
      super(props);
      this.state = { issues: [] };
    }
  
    async componentDidMount() {
        const response = await fetch(
          "https://api.github.com/repos/facebook/create-react-app/issues"
          );
        const data = await response.json();
        this.setState({
          issues: data,
        })
    }
  
    render() {
      const { issues } = this.state;
      return ( 
              <ul>
                  {
                      issues.map((issue,index) => (
                          <Issue key={issue.id} issue={issue}/>
                      ))
                  }
              </ul>   
      );
    }
  }

export default IssueList;