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
        response.data.forEach(data => {
          const repo = {
            name: data.name,
            description: data.description,
            language: data.language,
            code: data.html_url,
            updated: data.updated_at,
            api: data.url,
            id: data.id,
            img: `https://raw.githubusercontent.com/anjakhan/${data.name}/main/screenshot.png`
          }
          this.setState(state => {
            const list = [...state.repos, repo];

            return { repos: list }
          })
        })
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
        { this.state.repos.map(repo => {
          const { name, description, language, code, updated, api, img, id } = repo;
          return <CardSetup src={img} title={name} text={description} updated={updated} key={id} language={language}/>
        })}
      </>
    );
  }
}
