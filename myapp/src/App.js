import logo from'./logo.svg';
 import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
 import Login from './Login';
import Register from './Register';
 import Landing from './Landingpage';
 import ForgetPassword from './Forgetpassword';
 import Employee from './Employee';
import Profile from './Profile';
import Task from './Task';
 import GetTrained from './GetTrained';
 import Trainings from './Trainings';
import Admin from './Admin';
import Landingpage from './Landingpage';
import AllTask from './AllTask';
import ViewEmployee from './ViewEmployee';
import AddCourse from './AddCourse';
import AddTopics from './AddTopics';
import ViewReport from './ViewReport';
import View from './View';
import Empid from './Empid';
import Search from './Search';
 function App() {
  return(
   <>
     <Router>
    <Routes>
   <Route exact path="/" element={<Landing/>}/>
   <Route path="/Login" element={<Login/>}/>
   <Route path="/Register" element={<Register/>}/>
   <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
   <Route path="/Employee" element={<Employee/>}/>
   <Route path="/Profile" element={<Profile/>}/>
   <Route path="/Task" element={<Task/>}/>
    <Route path="/GetTrained" element={<GetTrained/>}/> 
    <Route path="Trainings" element={<Trainings/>}/>
   <Route path="Admin" element={<Admin/>}/>
   <Route path="/Landingpage" element={< Landingpage/>}/>
   <Route path="AllTask" element={<AllTask/>}/>
   <Route path="AddCourse" element={<AddCourse/>}/>
   <Route path="ViewEmployee" element={<ViewEmployee/>}/>
   <Route path="AddTopics" element={<AddTopics/>}/>
   <Route path="ViewReport" element={<ViewReport/>}/>
   <Route path="View" element={<View/>}/>
   <Route path="Empid" element={<Empid/>}/>
   <Route path="Search" element={<Search/>}/>
    </Routes>
     </Router>
     
   
 
    </>

   )
  }
  export default App;
