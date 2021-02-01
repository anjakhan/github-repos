import React from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default class CardSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }
  getRepos() {
    axios.get(`https://raw.githubusercontent.com/anjakhan/${this.props.title}/main/screenshot.png`)
      .then((response) => {
        this.setState({ image: `https://raw.githubusercontent.com/anjakhan/${this.props.title}/main/screenshot.png` })
      })
      .catch((error) => {
        this.setState({ image: 'https://cdn.pixabay.com/photo/2018/08/08/21/48/interface-3593269_960_720.png' })
        console.log('no image found');
      })
  }
  componentDidMount() {
    this.getRepos();
  }

  render() {
    const { title, text, updated, language } = this.props;
    return (
        <Card>
          <Card.Img variant="top" src={this.state.image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {text}{' '}<br /><br />
                { language ? <span><b>language:</b>{' '}{language}</span> : false }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated {updated}</small>
          </Card.Footer>
        </Card>
    );
  }
}
