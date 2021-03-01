import React from "react";
import ReactMarkdown from "react-markdown/with-html";

const Issue = (props) => {
    const { issue } = props;
    return (
      <li>
        <h2>{issue.title}</h2>
        <p>
            <a href={issue.url} >{issue.url}</a>
        </p>
        <ReactMarkdown children={issue.body} />
      </li>)
  };
  
  export default Issue;