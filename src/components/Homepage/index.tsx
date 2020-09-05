import React from "react";
import { Link } from "react-router-dom";
import useTitle from "hooks/title";
import "./style.css";

export default function Homepage() {
  useTitle();

  return (
    <div className="Homepage">
      <div className="global--wrapper">
        <h2>Create compilations in minutes</h2>

        <Link to="/editor">Try it now</Link>

        <p>Free, no sign-up required</p>
      </div>
    </div>
  );
}
