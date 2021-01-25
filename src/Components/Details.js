import React from "react";

import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import {withRouter} from 'react-router-dom'
class Details extends React.Component {
  state = {
    Details: {},
  };

  async componentDidMount() {
    const url = "https://reqres.in/api/users/3";
    const response = await fetch(url);
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
      <Container style={{ width: '18rem',height:'10rem'}} fluid>
      <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>Employee Details</Card.Title>
        <Card.Text>
          <h1>id</h1>
          <h1>{this.state.Details.id}</h1>
          <label>First Name</label>
          <h1>{this.state.Details.first_name}</h1>
          <label>last Name</label>
          <h1>{this.state.Details.last_name}</h1>
          <label>Job</label>
          <h1>{this.state.Details.job}</h1>
        </Card.Text>
        <Button onClick={this.changeRoute} variant="primary">Back to EmployeeList</Button>
      </Card.Body>
    </Card>
    </Container>
    </>
    );
  }
}
export default  withRouter(Details);
