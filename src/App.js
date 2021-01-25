import CreateEmployee from "./Components/CreateEmployee";
import EmployeeList from "./Components/EmployeeList";
import { Route } from "react-router-dom";
import Details from "./Components/Details";
import Update from "./Components/Update";
function App() {
  return (
    <>
      <link to="/"></link>
      <link to="CreateEmployee"></link>
      <Route path="/CreateEmployee" component={CreateEmployee} />
      <Route path="/Details" component={Details} />
      <Route path="/Update" component={Update} />
      <Route exact path="/" component={EmployeeList} />
    </>
  );
}

export default App;
