import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useHistory,useParams} from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import {withRouter} from 'react-router-dom'

const Update = (props) => {
  let history = useHistory();
  const { id } = useParams();
  const [Employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    job: "",
  });

  const { first_name,last_name, job } = Employee;
  const onInputChange = e => {
    setEmployee({ ...Employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://reqres.in/api/users/${id}`, Employee);
    console.log(Response.data)
    history.push("/");
  };

  const loadEmployees = async () => {
    console.log(id)
    const result = await axios.get(`https://reqres.in/api/users/${id}`);
    setEmployee(result.data.data);
    console.log()
  };
    return (
      <>
        <Container>
          <Form onSubmit={e => onSubmit(e)} >
            <Form.Group md="4" controlId="formBasicText">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={first_name}
                onChange={e => onInputChange(e)}
                
              />
            </Form.Group>
            <Form.Group md="4" controlId="formBasicEmail">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                name="last_name"
                value={last_name}
                onChange={e => onInputChange(e)}
                type="text"
                
              />
            </Form.Group>
            <Form.Group md="4" controlId="formBasicEmail">
              <Form.Label>job</Form.Label>
              <Form.Control
                type="text"
                name="job"
                value={job}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>

            <Button
              
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


export default withRouter(Update);
