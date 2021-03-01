import React from "react";

const Issue = (props) => {
    const { issue } = props;
    return (
      <li>
        Title: {issue.title}
        <a href={issue.url} >
         Link:  {issue.url}
        </a>
      </li>
    );
  };
  
  export default Issue;