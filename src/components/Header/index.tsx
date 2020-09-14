import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="global--wrapper">
        <Link to="/" className="Header--title">
          <h1>
            <span>bestoff</span>.video
          </h1>
        </Link>
        <div>
          <a
            href="https://github.com/sami-romdhana/bestoff"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <Link to="/editor" className="Header--create">
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}
