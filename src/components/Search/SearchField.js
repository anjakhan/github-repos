import React from "react";
import _ from "lodash";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import RepoList from "../../components/RepoList/RepoList";

export default class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            repos: []
        }
        this.search = _.debounce(function(e) {
            this.setState({ loading: true });
            axios.get('https://api.github.com/users/anjakhan/repos')
                .then((response) => {
                    const value = e.target.value.trim();
                    const repos = response.data.map(repo => {
                        if (repo.name.toLowerCase().includes(value.toLowerCase())) {
                            return repo.name
                        } else {
                            return null
                        }
                    })
                    this.setState({ loading: false, repos: value !== '' ? repos.filter(repo => repo) : [] });
                })
                .catch((error) => {
                    console.log(error);
                })
        }, 500).bind(this)
    }
    render() {
        return (
        <>
            <Form.Group>
                {this.state.loading ? <Spinner animation="border" variant="secondary" size="sm" style={{position: "absolute", right: "30px", marginTop: "10px"}} /> : null}
                <Form.Control type="text" placeholder="Search Repository ..." onChange={this.search} />
            </Form.Group>
            <RepoList repos={this.state.repos} />
        </>
        );
    }
}
