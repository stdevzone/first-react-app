import React from 'react';


const NavLinks = ()=> {
    return (
    <ul className="navbar-nav mx-auto">

      <li className="nav-item active">
          <a className="nav-link" href="#">Home <i class="fas fa-home"></i></a>
      </li>

      <li className="nav-item active">
          <a className="nav-link" href="#">About <i class="fas fa-user-alt"></i></a>
      </li>

      <li className="nav-item active">
          <a className="nav-link" href="#">Gallery <i class="fas fa-images"></i></a>
      </li>

      <li className="nav-item active">
          <a className="nav-link" href="#">Blog <i class="fas fa-photo-video"></i></a>
      </li>
      
      <li className="nav-item active">
          <a className="nav-link" href="#">Contact <i class="fas fa-mobile-alt"></i></a>
      </li>
     
    </ul>
 
 
    )
}

export default NavLinks;