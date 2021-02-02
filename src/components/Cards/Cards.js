import React from "react";
import axios from "axios";

import CardSetup from "./Card";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }
  getRepos() {
    axios.get('https://api.github.com/users/anjakhan/repos')
      .then((response) => {
        for (let i=0; i<9; i++) {
          const data = response.data[i]
          const repo = {
            name: data.name,
            description: data.description,
            language: data.language,
            code: data.html_url,
            updated: data.updated_at,
            id: data.id
          }
          this.setState(state => {
            const list = [...state.repos, repo];
            return { repos: list }
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  componentDidMount() {
    this.getRepos();
  }

  render() {
    return (
      <>
        {this.state.repos.map(repo => {
          const { name, description, language, code, updated, id } = repo;
          return <CardSetup title={name} text={description} updated={updated} key={id} language={language} code={code} />
        })}
      </>
    );
  }
}
