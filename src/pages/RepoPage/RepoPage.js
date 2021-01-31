import React from "react";

import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";

import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Cards from "../../components/Cards/Cards";

export default function RepoPage() {
    return (
      <Container>
        <Jumbotron />
        <CardColumns>
          <Cards />
        </CardColumns>
      </Container>
    );
}
  