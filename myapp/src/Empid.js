import React from "react";
import {Link} from 'react-router-dom';
import './Login.css';
function Empid(){
    return(
        <>
    <form>
     <h1><center>Login Form</center></h1> 
      <label ><strong> Email </strong></label>
        <input type="text" id="Employee Id" placeholder="Enter your ID" /><br/>
        <label ><strong>Password</strong>  </label>
        <input type="password" class="password" id="password" placeholder="Enter your Password" /><br/>
        
    </form>
    </>
    )

}
export default Empid;