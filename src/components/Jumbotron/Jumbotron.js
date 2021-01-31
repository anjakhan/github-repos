import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Jumbot() {
    return (
        <Jumbotron>
            <Container>
                <h1>GitHub Repositories</h1>
                <p>
                    An overview of GitHub Repositories by <a href="https://github.com/anjakhan/" rel="noreferrer" target="_blank">Anja Khan</a>
                </p>
            </Container>
        </Jumbotron>
    );
}
  