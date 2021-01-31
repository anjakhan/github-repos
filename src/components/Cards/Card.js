import React from "react";
import Card from "react-bootstrap/Card";

export default function CardSetup(props) {
    const { src, title, text, updated, language } = props;
    return (
        <Card>
          <Card.Img variant="top" src={src} />
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
