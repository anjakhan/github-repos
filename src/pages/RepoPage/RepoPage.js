import React from "react";

import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

import Jumbotron from "../../components/Jumbotron/Jumbotron";
import SearchField from "../../components/Search/SearchField";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

export default class RepoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      screenshot: null
    }
    this.getAllRepos = this.getAllRepos.bind(this);
  }
  getAllRepos() {
    const currentState = this.state.all;
    this.setState({ all: !currentState });
  }
  render() {
    return (
      <>
      <Container style={{position: "relative"}}>
        <Jumbotron />
        <SearchField />
        <CardColumns>
          <Cards allRepos={this.state.all} />
        </CardColumns>
        <Button variant={this.state.all ? "secondary" : "primary"} block style={{marginBottom: "50px", marginTop: "30px"}} onClick={this.getAllRepos} >
          {this.state.all ? "View less" : "View all repositories"}
        </Button>
      </Container>
      <Footer />
      </>
    );
  }
}
  