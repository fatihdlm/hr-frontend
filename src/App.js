import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/login/Login";
import Employee from "./components/employee/Employee";
import EmployeeDetail from "./components/employee/EmployeeDetail";
import AddEmployee from "./components/employee/AddEmployee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/employees" element={<Employee/>} />
      <Route path="/addEmployee" element={<AddEmployee/>} />
      <Route path="/employeeDetail/:id" element={<EmployeeDetail/>}/>
    </Routes>

  );
}

export default App;
