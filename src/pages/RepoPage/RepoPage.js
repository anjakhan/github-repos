import React from "react";

import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

import Jumbotron from "../../components/Jumbotron/Jumbotron";
import SearchField from "../../components/Search/SearchField";
import Cards from "../../components/Cards/Cards";

export default function RepoPage() {
    return (
      <Container style={{position: "relative"}}>
        <Jumbotron />
        <SearchField />
        <CardColumns>
          <Cards />
        </CardColumns>
        <Button variant="primary" block style={{marginBottom: "50px", marginTop: "30px"}}>
          View all repositories
        </Button>
      </Container>
    );
}
  