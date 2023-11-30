import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

const PostPage = () => {
  return (
    <>
      <div>PostPage</div>
      <Modal.Dialog>
        <Form>
          <Stack direction="horizontal" gap={3} className="col-md-5 mx-auto">
            <Row>
              <Col xs="auto">
                <Button variant="outline-success" href="NewPostPage">
                  Create
                </Button>{" "}
              </Col>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" variant="outline-primary">
                  Primary
                </Button>{" "}
              </Col>
            </Row>
          </Stack>
        </Form>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="outline-success">
                  Ver
                </Button>{" "}
                <Button variant="outline-danger">Danger</Button>{' '}

      </Card.Body>
    </Card>
      </Modal.Dialog>
      
    </>
  );
};

export default PostPage;
