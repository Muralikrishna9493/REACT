import React from "react";
import { Link } from 'react-router-dom';
import './Landigpage.css'
function Landingpage(){
    return(
        <>
        <table>
            <tr>
            <td>
            <img src="https://static.wixstatic.com/media/2fb119_19ff2376b94e4fd09b975b2b63853ec8~mv2.png/v1/crop/x_0,y_39,w_1751,h_418/fill/w_383,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ANARGHYA%20Logo%20.png" className="img1"></img>
            </td>
            <td></td>
            <td></td>
            </tr>
            <tr>
                <td>
                    <h1>ANNARGHYA COMMUNICATIONS</h1>
                    <p>Welcome to Anarghya Communications, your gateway to innovative software
                 and digital excellence. We sculpt digital experiences, weaving cutting-edge code
                   and creative mastery. Our bespoke software transcends expectations, while our
                   avant-garde marketing strategies paint vibrant online landscapes. At Anarghya,
                  we don't offer services; we curate digital narratives that captivate and convert.
                Join us in the dance of bytes and pixels, where every step is a leap into the future</p></td>
    
    </tr>
    <tr>
        <td>
                         <h2>WHAT WE DO</h2>
            <p>At Anarghya Communications, we're not just a software company; we're your strategic ally in the tech 
            evolution.Our services are a precise blend of innovation, quality, and client-centricity. Beyond being providers,
             we're enablers of possibilities. Join us in the pursuit of technological excellence—where every solution
              propels you towards a future defined by innovation and client success.</p></td> 
              <td></td>
                <td><img src="https://exitpromise.com/wp-content/uploads/2014/04/bigstock-Group-of-business-partners-lis-38768791.jpg" className="img2"></img></td>
            </tr>
             </table>
            < Link type="button" to="/Login"><input value="Explore Now" className="input"/></Link>
            
            
        </>
    )
}
export default Landingpage;