import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    list: {
        position: "absolute", 
        zIndex: "10", 
        width: "100%", 
        paddingRight: "30px", 
        marginTop: "-1rem"
    },
  });

export default function RepoList(props) {
    const { repos } = props;
    const classes = useStyles();
    return (
        <ListGroup className={classes.list}>
            {repos
                .filter((item, idx) => idx<5)
                .map(repo => 
                    <ListGroup.Item key={repo} variant="secondary">
                        <a href={`https://github.com/anjakhan/${repo}`} rel="noreferrer" target="_blank" style={{color: "#980C13"}} >
                            {repo}
                        </a>
                    </ListGroup.Item>
                )
            }
      </ListGroup>
    );
}
  