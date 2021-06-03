import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav fixed="top" className="nav">
        <ul>
          <div style={{ float: "left" }}>
            <li style={{ textAlign: "left" }}>
              <Link
                to="/home"
                style={{
                  backgroundColor: "black",
                  fontSize: "30px",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Energy Transport
              </Link>
            </li>
          </div>
          <div style={{ float: "right" }}>
            <li>
              <Link
                to="/home"
                style={{ backgroundColor: "black", padding: "10px" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/pickup"
                style={{ backgroundColor: "black", padding: "10px" }}
              >
                Destination
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                style={{ backgroundColor: "black", padding: "10px" }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ backgroundColor: "black", padding: "10px" }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{ backgroundColor: "black", padding: "10px" }}
              >
                Login
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
