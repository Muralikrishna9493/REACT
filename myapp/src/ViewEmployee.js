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
        <Link to='/AddTopics'><label>Add Topics</label></Link>
        <Link to='/ViewReport'><label>View Reports</label></Link>
        <Link><label>Emp Id</label></Link>
        <Link><label>Search</label></Link>
    </div>
    <table className="tab4">
        <tr>
            <th className="th2">Sr</th>
            <th className="th2">Emp Id</th>
            <th className="th2">Name</th>
            <th className="th2">Role</th>
            <th className="th2">Joining</th>
            <th className="th2">Date</th>
            <th className="th2">Dept</th>
            <th className="th2">Phone</th>
            <th className="th2">Email</th>
            <th className="th2">Address</th>
        </tr>
        <tr>
            <td className='td3'>1</td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
        </tr>
        <tr>
            <td className='td3'>2</td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
        </tr>
        <tr>
            <td className='td3'>3</td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
            <td><input className="td4"/></td>
        </tr>
    </table>
    
    <div className="footer">Annarghyacommunications@gmail.com</div>
    </>
)
}
export default Admin;