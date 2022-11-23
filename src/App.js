import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function App() {

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || "[]")
    const user = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email
    }
    users.push(user)

    localStorage.setItem('users', JSON.stringify(users))
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                id="1"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                id="2"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                id="3"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <Button type="submit">Register</Button>
          </Form>
        </Col>
      </Row><hr />
      first name: <strong>{values.firstname}</strong>
      <br />
      last name: <strong>{values.lastname}</strong>
      <br />
      email: <strong>{values.email}</strong>
    </Container>
  );
}

export default App;
