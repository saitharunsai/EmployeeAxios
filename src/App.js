import CreateEmployee from "./Components/CreateEmployee";
import EmployeeList from "./Components/EmployeeList";
import { Route } from "react-router-dom";
import Details from "./Components/Details";
import Update from "./Components/Update";
function App() {
  return (
    <>
      
      <Route path="/CreateEmployee" component={CreateEmployee} />
      <Route path="/Details/:id" component={Details} />
      <Route path="/Update/:id" component={Update} />
      <Route exact path="/" component={EmployeeList} />
    </>
  );
}

export default App;
