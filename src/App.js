import "./App.css";
import { Form, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import myImage from "./makrem.jpg.jpg";
function App() {
  return (
    <Container className="container">
      <Row>
        <Col>
          <h1>We Sell Flowers </h1>
          <Form className="container">
            <Form.Group className="mb-3 test" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ width: "250px" }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ width: "250px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" id="btn-submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <center>
            <img
              src={myImage}
              alt="makrem"
              style={{ width: "400px", height: "400px", borderRadius: "30%" }}
            />
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
