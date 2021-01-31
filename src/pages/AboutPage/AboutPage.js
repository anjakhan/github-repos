import React from "react";

export default function AboutPage() {
    return (
      <>
        <h1>Header for this page</h1>
        <h2>Intro</h2>
        <p>some intro text about this page ...</p>
        <h2>Stacks</h2>
        <ul>
          <li><span style={{fontWeight: 'bold'}}>Framework:</span> React</li>
          <li><span style={{fontWeight: 'bold'}}>Libraries:</span> Axios, Lodash, Bootstrap, ...</li>
        </ul>
        <h2>Contact</h2>
      </>
    );
}
  