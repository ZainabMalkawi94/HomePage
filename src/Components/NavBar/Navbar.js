import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  return(
<>
  <div className="header">
    <div className="cont">
      <div className="navbar">
        <div className="logo">
        <img src="https://i.ibb.co/LQ1Xzbr/Screenshot-2023-05-24-133654-removebg-preview.png" alt="Logo"/>
       </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          LogIn As
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>            </li>
           
          </ul>
        </div>
      </div>
    </div>
  </div>

</>

  );



}
export default Navbar;