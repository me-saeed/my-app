import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar background">
      <ul className="nav-list">
        <div className="logo">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          {/* {props.name} */}
        </div>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Services">Services</a>
        </li>
        <li>
          <a href="/About">About Us</a>
        </li>
        <li>
          <a href="/Contact">Contact Us</a>
        </li>
      </ul>
      <div className="rightNav">
        <input type="text" name="Search" id="Search" />
        <button className="btn btn-sm">Search</button>
      </div>
    </nav>
  );
}

export default Navbar;
