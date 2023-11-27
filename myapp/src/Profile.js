import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';
function Employee(){
return(
    <>
     <div className="header">
        <label>Site Name</label>
        <label>Dashbord Name</label>
        <label>EMP NAME</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://www.vectorstock.com/royalty-free-vector/boy-avatar-in-round-web-button-isolated-on-white-vector-20694473" alt="" className="B"></img>
        
            <Link><label>EMP ID</label></Link>
            <Link to='/PROFILE'><label>Profile</label></Link>
            <Link to='/TASK'><label>Tasks</label></Link>
            <Link to='/TRININGS'><label>Trainings</label></Link>
            <Link><label>Sign Off</label></Link>
        </aside>
    </div>
  <center>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/972/881/small/business-team-employees-user-icon-free-vector.jpg" className="A"alt=""></img>
        <table  className='tabTask'>
        <tr>
        
            <ul><th>Name:Murali Krishna</th></ul>
            <ul> <th>Phone:9493955005 </th></ul>
            <ul><th>Email:muralimahesh333@gmail.com</th></ul>
            <ul><th>Emp Id :AC2503</th></ul>
            </tr></table>
  </center>

    
    <div className="footer"> Annarghya communications@123</div>

    </>
)
}
export default Employee;