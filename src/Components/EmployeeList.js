import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";

class EmployeeList extends Component {
  state = {
    EmployeeList: [],
    errors: null,
  };

  getEmployeeList() {
    axios
      .get("https://reqres.in/api/users/", {
        params: {
          PAGE: 2,
        },
      })
      .then((response) =>
        response.data.data.map((EmployeeList) => ({
          id: `${EmployeeList.id}`,
          first_name: `${EmployeeList.first_name}`,
          last_name: `${EmployeeList.last_name}`,
          job: `${EmployeeList.job}`,
        }))
      )
      .then((EmployeeList) => {
        this.setState({
          EmployeeList,
        });
        console.log(EmployeeList);
      })
      .catch((error) => this.setState({ error }));
  }

  componentDidMount() {
    this.getEmployeeList();
  }
  
  // For Create Employees
  changeRoute = () => {
    const { history } = this.props;
    if (history) history.push("/CreateEmployee");
  };

  //For Details Button
  changeRoute1 = () => {
    const { history } = this.props;
    if (history) history.push("/Details");
  };

  //For the Update button
  changeRoute2 = () => {
    const { history } = this.props;
    if (history) history.push("/Update/:id");
  };

  // For 1 item
  removeItem(index) {
    const EmployeeList = [...this.state.EmployeeList];
    EmployeeList.splice(index, 1);
    this.setState({ EmployeeList: EmployeeList });
  }
  // For Whole Items
  removeItemAll(index) {
    const EmployeeList = [...this.state.EmployeeList];
    EmployeeList.splice(index, 6);
    this.setState({ EmployeeList: EmployeeList });
  }

  render() {
    const { EmployeeList } = this.state;

    return (
      <>
        <Container>
          <h1>EmployeeList</h1>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button onClick={this.changeRoute} variant="outline-success">
              Create Employee
            </Button>
            <Button
              style={{ margin: "15px" }}
              onClick={() => {
                if (window.confirm("Delete all the item?")) {
                  this.removeItemAll();
                }
              }}
              variant="danger"
            >
              Delete All
            </Button>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {EmployeeList.map((Employee, index) => {
                var { first_name, last_name, job, id } = Employee;
                return (
                  <>
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{first_name}</td>
                      <td>{last_name}</td>
                      <td>{job}</td>
                      <td>
                        <Button
                          style={{ margin: "15px" }}
                          onClick={() => {
                            if (window.confirm("Delete the item?")) {
                              this.removeItem(index);
                            }
                          }}
                          variant="danger"
                        >
                          Delete
                        </Button>
                        <Button
                          href={'/Update/'+id}
                          style={{ margin: "15px" }}
                          variant="primary"
                        >
                          Update
                        </Button>
                        <Button
                        href={'/Details/'+id}
                          style={{ margin: "15px" }}
                          variant="secondary"
                         
                        >
                          Details
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default withRouter(EmployeeList);
