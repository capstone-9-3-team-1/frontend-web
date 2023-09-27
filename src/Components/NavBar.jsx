import React from "react";

import "./navBar.css";

export default function NavBar() {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar">
      <a href="#/" onClick={() => smoothScroll("get_app")}>
        Get App
      </a>{" "}
      |{" "}
      <a href="#/how-it-works" onClick={() => smoothScroll("how-it-works")}>
        How It Works
      </a>{" "}
      |{" "}
      <a href="#/impact-stories" onClick={() => smoothScroll("impact-stories")}>
        Impact Stories
      </a>{" "}
      |{" "}
      <a href="#/mission" onClick={() => smoothScroll("mission")}>
        Mission Statement
      </a>
    </nav>
  );
}
