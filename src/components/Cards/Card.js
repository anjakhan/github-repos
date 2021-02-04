import React from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default class CardSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      diffMonths: null,
      year: null
    }
  }
  getRepos() {
    axios.get(`https://raw.githubusercontent.com/anjakhan/${this.props.title}/main/screenshot.png`)
      .then((response) => {
        this.setState({ image: `https://raw.githubusercontent.com/anjakhan/${this.props.title}/main/screenshot.png` })
      })
      .catch((error) => {
        this.setState({ image: null })
        console.log('no image found', error);
      })
  }
  componentDidMount() {
    this.getRepos();
    const today = new Date();
    const date = new Date(this.props.updated);
    const year = new Date().getFullYear() === date.getFullYear();
    let diff = (today.getTime() - date.getTime()) / 1000;
    diff = diff / (60 * 60 * 24 * 10 * 3);
    this.setState({ year: year, diffMonths: Math.abs(Math.round(diff))});
  }

  render() {
    const { title, text, language, code } = this.props;
    return (
        <Card>
          { this.state.image ? <Card.Img variant="top" src={this.state.image} /> : false }
          <Card.Body>
            <Card.Title><a href={code} rel="noreferrer" target="_blank" style={{textDecoration:"none", color:"inherit", cursor:"pointer"}}>{title}</a></Card.Title>
            <Card.Text>
                {text}{' '}<br /><br />
                { language ? <span><b>language:</b>{' '}{language}</span> : false }
            </Card.Text>
          </Card.Body>
          { 
            this.state.diffMonths < 1 && this.state.year ?
            <Card.Footer>
              <small className="text-muted">Recently updated</small>
            </Card.Footer> 
            : null
          }
        </Card>
    );
  }
}
