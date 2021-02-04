import React from "react";
import axios from "axios";

import CardSetup from "./Card";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      repos: []
    }
  }
  getRepos() {
    axios.get('https://api.github.com/users/anjakhan/repos')
      .then((response) => {        
        const n = response.data.length;
        for (let i=0; i<n; i++) {          
          const data = response.data[i];
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
            return { n:n, repos: list }
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
    let n = this.state.n;
    this.props.allRepos ? n=this.state.n : n=9;
    return (
      <>
        {this.state.repos
          .filter((item, idx) => idx<n)
          .map(repo => {
          const { name, description, language, code, updated, id } = repo;
          return <CardSetup title={name} text={description} updated={updated} key={id} language={language} code={code} />
        })}
      </>
    );
  }
}
