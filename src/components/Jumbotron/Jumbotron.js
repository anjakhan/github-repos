import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Jumbot() {
    return (
        <Jumbotron style={{background: "linear-gradient(45deg, #3FD2F1, #105EB2)"}}>
            <Container>
                <h1>GitHub Repositories</h1>
                <p>
                    An overview of GitHub Repositories by {' '}
                    <a 
                        href="https://github.com/anjakhan/" 
                        rel="noreferrer" 
                        target="_blank"
                        style={{color: "#980C13", fontWeight: "bold"}}
                    >Anja Khan</a>
                </p>
            </Container>
        </Jumbotron>
    );
}
  