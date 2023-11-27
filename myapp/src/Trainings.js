import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';
function Employee(){
return(
    <>
     <div className="header"> 
     <label>Site Name</label>
    
        <label>Employee Dashboard</label> 
        <label>Employee name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg?w=1060&t=st=1700198685~exp=1700199285~hmac=f2fe1ff3b4ded1e3d68697f78cb6d2d775bbc37bd5b78b0608d4da69ecc76785" alt="" className="B"></img>
            <Link><label>Emp Id</label></Link> 
            <Link to='/Profile'><label>Profile</label></Link>
            <Link to='/Task'><label>Tasks</label></Link>
            <Link to='/Trainings'><label>Trainings</label></Link>
            <Link to='/Login'><label>Sign off</label></Link>
        </aside>
    </div>
    <h1><ins>Training Done</ins></h1>
    <table className='tabTrain'>
        <tr>
            <th>Sl.no</th>
            <th>Course Name </th>
            <th>Topic Name</th>
            <th>Status </th>
            <th>Start Date</th>
            <th>End Date</th>
        </tr>
    </table>
    <Link to='/Employee'><input value='Back' type="button" className="tran" /></Link>
    <Link to='/GetTrained'><input value='Get Trained' type="button" className="tran"/></Link>
    
       
    <div className="footer">Annarghyacommunications@gmail.com</div>
    </>
)
}
export default Employee;



