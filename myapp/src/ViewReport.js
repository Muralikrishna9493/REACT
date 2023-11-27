import React from "react";
import {Link} from 'react-router-dom';
import './Admin.css';
function Admin(){
return(
    <>
     <div className="header">
        <label>Site Name</label>
        <label>Admin Dashboard</label>
        <label>Employee name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
            
        <img src="https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg?w=1060&t=st=1700198685~exp=1700199285~hmac=f2fe1ff3b4ded1e3d68697f78cb6d2d775bbc37bd5b78b0608d4da69ecc76785" alt="" className="B"></img>
            <Link><label>Emp Id</label></Link>
            <Link><label>Profile</label></Link>
            <Link to='/ViewEmployee'><label>View Employee</label></Link>
            <Link to='/Login'><label>Sign off</label></Link>
        </aside>
    </div>
    <div className="navAdmin">
        <Link to='/AddCourse'><label>Add Courses</label></Link>
        <Link to='/Addtopics'><label>Add Topics</label></Link>
        <Link to='/ViewReport'><label>View Reports</label></Link>
        <Link><label>Emp Id</label></Link>
        <Link to='/Search'><label>Search</label></Link>
    </div>
    <table>
        <tr>
            <th className="viewTh">Sr</th>
            <th className="viewTh">Report Id</th>
            <th className="viewTh">Task</th>
            <th className="viewTh">Status</th>
            <th className="viewTh">Start time</th>
            <th className="viewTh">End Time</th>
            <th className="viewTh">Emp Id</th>
            <th className="viewTh">Action</th>
        </tr>
        <tr>
            <td className="viewTh">1</td>
            <td className="viewTh">1</td>
            <td className="viewTh"><input className="topicInput"/></td>
            <td className="viewTh"><input className="topicInput"/></td>
            <td className="viewTh"><input className="topicInput"/></td>
            <td className="viewTh"><input className="topicInput"/></td>
            <td className="viewTh">1</td>
            <td className="viewTh"><Link to='/View'><input type="button" value='View' className="topicInput1"/></Link></td>
        </tr>
    </table>
    <div className="footer">Copyright @2023 All Rights recived</div>
    </>
)
}
export default Admin;