import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./style.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div>bestoff.video &copy; 2020</div>
      <div>
        <a
          href="https://sami.romdhana.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </div>
    </div>
  );
}
