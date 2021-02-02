import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function RepoPage(props) {
    const { repos } = props;
    return (
        <ListGroup style={{position: "absolute", zIndex: "10", width: "100%", paddingRight: "30px", marginTop: "-1rem"}}>
            {repos
                .filter((item, idx) => idx<5)
                .map(repo => <ListGroup.Item key={repo}><a href={`https://github.com/anjakhan/${repo}`} rel="noreferrer" target="_blank" >{repo}</a></ListGroup.Item>)
            }
      </ListGroup>
    );
}
  