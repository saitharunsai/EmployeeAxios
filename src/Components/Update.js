import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
class Update extends Component {
  state = {
    firstName: "",
    lastName: "",
    job: "",
    Names:[]
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeRoute = () => {
    const { history } = this.props;
    if (history) history.push("/");
  };


  
    onSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      job: this.state.job,
    };
    axios.put("https://reqres.in/api/users/2/", { data }).then((res) => {
      console.log(res);
      console.log(res.data);
      this.setState = { data: res.data };
      this.changeRoute();
    
    });
  };
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.onSubmit}>
            <Form.Group md="4" controlId="formBasicText">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
                
                placeholder="enter the FirstName"
              />
            </Form.Group>
            <Form.Group md="4" controlId="formBasicEmail">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                type="text"
                placeholder="enter the LastName"
              />
            </Form.Group>
            <Form.Group md="4" controlId="formBasicEmail">
              <Form.Label>job</Form.Label>
              <Form.Control
                type="text"
                name="job"
                onChange={this.handleChange}
                value={this.state.job}
                placeholder="Enter job"
              />
            </Form.Group>

            <Button
              disabled={
                this.state.firstName < 4 ||
                this.state.lastName < 4 ||
                this.state.job < 2
                  ? true
                  : false
              }
              variant="primary"
              type="submit"
            >
              Update
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default withRouter(Update);
