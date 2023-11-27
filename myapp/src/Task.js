import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';
function Tasks(){
return(
    <>
     <div className="header">
        <label>Site Name</label>
        <label>Dashbord Name</label>
        <label>Emp Name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://www.vectorstock.com/royalty-free-vector/boy-avatar-in-round-web-button-isolated-on-white-vector-20694473" alt="" className="B"></img>
            <Link><label>EMP ID</label></Link>
            <Link to='/Profile'><label>Profile</label></Link>
            <Link to='/Task'><label>Tasks</label></Link>
            <Link to='/Trainings'><label>Trainings</label></Link>
            <Link><label>Sign off</label></Link>
        </aside>
    </div>
    <table  className='tabTask'>
        <tr>
            <th>Task</th>
            <th>Discription </th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status </th>
            <th>Start Date</th>
            <th>End Date</th>
        </tr>
        <tr>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
        </tr>
    </table>
    <input value='Sumbit' className="task" />
    <Link to='/AllTask'> <input value='All Tasks' className="task"/></Link>
     
    <div className="footer">Annarghyacommunications@gmail.com</div>
    </>
)
}
export default Tasks;