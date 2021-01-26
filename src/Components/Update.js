import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
class Update extends Component {
  constructor(props){
    super(props)
    this.state = {
    Details: {}
  };
}

  async componentDidMount() {
    const url = "https://reqres.in/api/users/";
    const response = await fetch(url  + this.props.match.params.id);
    const data = await response.json();
    console.log(data);
    this.setState({ Details: data.data });
  }


  changeRoute = () =>{
    const {history} = this.props;
    if (history ) history.push('/')
    
  }

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
                value={this.state.Details.first_name}
                
                placeholder="enter the FirstName"
              />
            </Form.Group>
            <Form.Group md="4" controlId="formBasicEmail">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                name="last_name"
                value={this.state.Details.last_name}
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
                value={this.state.Details.job}
               
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
