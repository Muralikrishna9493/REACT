import React from "react";
import {Link} from 'react-router-dom';
import './Login.css';
function Login(){
    return(
        <>
    <form>
     <h1><center>Login Form</center></h1> 
      <label ><strong> Email </strong></label>
        <input type="text" id="email" placeholder="Enter your Email" /><br/>
        <label ><strong>Password</strong>  </label>
        <input type="password" class="password" id="password" placeholder="Enter your Password" /><br/>
        <Link to ="/Forgetpassword" >Forgetpassword</Link><br></br>
     <Link type="button" to ="/Employee"> <button type="submit" value="submit" class="butto" onclick="verifyLogin()">Login as emp</button></Link> <br></br>
     <p>You Don't Have an Account ?</p>
     <Link type="button" to ="/Admin"> <button type="submit" value="submit" class="butto" onclick="verifyLogin()">Login as Admin</button></Link> <br></br>
       <Link to ='/Register'>Register now</Link>
       
       
    
    </form>
    </>
    )

}
export default Login;