import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';
function AllTask(){
return(
    <>
     <div className="header">
     <label>Site Name</label>
        <label>Employee Dashboard</label>
        <label>Employee name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/972/881/small/business-team-employees-user-icon-free-vector.jpg" alt="" className="B"></img>
            
            <Link><label>EMP ID</label></Link>
            <Link to='/Profile'><label>Profile</label></Link>
            <Link to='/Task'><label>Tasks</label></Link>
            <Link to='/Training'><label>Trainings</label></Link>
            <Link><label>Sign off</label></Link>
        </aside>
    </div>
    <table  className='tabTask'>
        <tr>
            <th>Sl.No</th>
            <th>Task</th>
            <th>Discription </th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status </th>
            <th>Start Date</th>
            <th>End Date</th>
        </tr>
        <tr>
            <td>1</td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
            <td><input className="inTask"/></td>
        </tr>
        <tr>
            <td>2</td>
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
export default AllTask;



 