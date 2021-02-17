import React from "react";
import Project from "../Project";
import "../../index.css";

const styles = {
  font: {
    color: "white",
    fontFamily: "Fjalla One",
  },
  a: {
    color: "#d8b2ee",
  },
};
function Portfolio() {
  return (
    <main class="container" style={styles.font}>
      <h1>Portfolio</h1>
      <hr />
      <Project />
    </main>
  );
}

export default Portfolio;
