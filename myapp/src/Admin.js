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
        
        <img src="https://as2.ftcdn.net/v2/jpg/06/19/66/93/1000_F_619669387_lDc2Ccg9GSrYR5kNquiUoEbk6fkhcwdR.jpg" alt="" className="B"></img>
        
            <Link><label>EMP ID</label></Link>
            <Link><label>Profile</label></Link>
            <Link to='/ViewEmployee'><label>View Employee</label></Link>
            <Link to='/Login'><label>Sign off</label></Link>
        </aside>
    </div>
    <div className="NavAdmin">
        <Link to='/AddCourse'><label>Add Courses</label></Link>
        <Link to='/AddTopics'><label>Add Topics</label></Link>
        <Link to='/ViewReport'><label>View Reports</label></Link>
        <Link><label>Emp Id</label></Link>
        <Link><label>Search</label></Link>
    </div>
         
    <div className="footer">annarghyacommunications@gmail.com</div>
    </>
)
}
export default Admin;