import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';
function Employee(){
return(
    <>
     <div className="header">
        <label>Site Name</label>
        <label>Dashbord Name</label>
        <label>Emp Name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1700305120~exp=1700305720~hmac=6b77578b8175b3844920465dda55c928372f83d56805a69ce2ed353ea8c54915" alt="" className="B"></img>
            
            <Link><label>Emp Id</label></Link>
           <Link to='/Profile'><label>Profile</label></Link>
           <Link to='/Task'><label>Tasks</label></Link>
           <Link to='/Trainings'><label>Trainings</label></Link>
           <Link to='/Login'><label>Sign off</label></Link>
           
        </aside>
    </div>
    <h1>Tasks Available</h1>
    <table border='1' className='tab'>
        <tr>
            <th>Task Id</th>
            <th>Task </th>
            <th>Objective</th>
            <th>Deadline</th>
        </tr>
    </table>
    <input value='Back' className="emp" />
    <input value='All Tasks' className="emp"/>
    
       
    <div className="footer">Annarghyacommunications@gmail.com</div>
    </>
)
}
export default Employee;