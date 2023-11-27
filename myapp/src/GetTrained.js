import React from "react";
import {Link} from 'react-router-dom';
import './Employee.css';
function GetTrained(){
return(
    <>
     <div className="header">
        <img src="https://media.licdn.com/dms/image/D5616AQGsXz-uaJq2Xg/profile-displaybackgroundimage-shrink_200_800/0/1694684403459?e=2147483647&v=beta&t=NMv_B7mvAFKrHAyBT-BIGuDPlkio8ZSFkkx0G1QE-vo" className="imgEmp"></img>
        <label>Employee Dashboard</label>
        <label>Employee Name</label>
    </div> 
    <div className="sidebar">
        <aside className="aside1">
        <img src="https://img.freepik.com/free-photo/business-woman-with-tablet-standing-office_1303-25394.jpg" className="empImg"></img>
            <Link><label>Emp ID</label></Link>
            <Link to='/Profile'><label>Profile</label></Link>
            <Link to='/Task'><label>Tasks</label></Link>
            <Link to='/Training'><label>Trainings</label></Link>
            <Link><label>Sign off</label></Link>
        </aside>
    </div>
    <h1><ins>Training Form</ins></h1>
    <table className='tabTrained'>
        <tr>
            <th className="th1">Course Name</th>
            <th className="th1">Topic Name</th>
            <th className="th1">Status</th>
            <th className="th1">Start Date</th>
            <th className="th1">End Date</th>
        </tr>
        <tr>
        <td><select>
                <option>-select-</option>
                <option>JAVA</option>
                <option>SQL</option>
                <option>HTML</option>
                </select></td>
                <td><select>
                <option>-select-</option>
                <option>OOPS</option>
                <option>STRING</option>
                <option>ARRAY</option>
                </select></td>
                <td><select>
                <option>-select-</option>
                <option>Completed</option>
                <option>Not Completed</option>
                </select></td>
            <td><input type="Date" className="inTask"/></td> 
            <td><input type="Date" className="inTask"/></td>
        </tr>
    </table>
    <Link to='/GetTraining'><input value='Back' type="button" className="tran" /></Link>
    <Link to=''><input value='Start Training' type="button" className="tran" /></Link>
    <Link><input value='Get Trained' type="button" className="tran"/></Link>
    <div className="footer">Copyright @2023 All Rights recived</div>
    </>
)
}
export default GetTrained;