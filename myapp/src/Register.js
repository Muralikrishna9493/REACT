import React from "react";
import './Registration.css';
function Register(){
    return(
        <>
        <form>

   
        <h2><center>Register form</center></h2>

                <label>First name:</label>
                <input type="text" id="name" placeholder="Enter your first name" /><br></br>
                <label>Last name:</label>
                <input type="text" id="name" placeholder="Enter your last name"/><br></br>
                <label>Phone number:</label>
                 <input type="number" id="number" placeholder="Enter your phone number"/><br></br>
                 <label>Email:</label>
                 <input type="email" id="email" placeholder="Enter your email"/><br></br>
                 <label>Password:</label>
                 <input type="text" id="password" placeholder="Enter your password"/><br></br>     
                 <button>Register</button>
                 
       
                    </form>

                    </>
        )
    }
    export default Register;