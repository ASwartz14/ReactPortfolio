import React from "react";
import { Link, Route } from "react-router-dom";
import "../../index.css";
import resume from "../../assets/WebDev.pdf";
const styles = {
  font: {
    color: "white",
    fontFamily: "Fjalla One",
  },
  a: {
    color: "#d8b2ee",
  },
};
function Contact(props) {
  return (
    <main className="container" style={styles.font}>
      <section class="row">
        <div class="col-md-8">
          <h1>Contact Info</h1>
          <hr />

          <ul>
            <li>
              <i class="fas fa-envelope-square"></i>
              <strong> Email: </strong>{" "}
              <a
                href="mailto:asriley144@gmail.com"
                target="_blank"
                style={styles.a}
              >
                asriley144@gmail.com
              </a>{" "}
            </li>
            <li>
              <i class="fab fa-github"></i>
              <strong> GitHub: </strong>{" "}
              <a
                href="https://github.com/ASwartz14"
                target="_blank"
                style={styles.a}
              >
                ASwartz14
              </a>{" "}
            </li>
            <li>
              <i class="fab fa-linkedin"></i>
              <strong> LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/amber-swartz-081a691ab/"
                style={styles.a}
              >
                Amber Swartz
              </a>
            </li>
            <li>
              {" "}
              <i class="fas fa-folder"></i>
              <strong> Portfolio: </strong>{" "}
              <a href="http://google.com" target="_blank" style={styles.a}>
                http://google.com
              </a>{" "}
            </li>
            <li>
              {" "}
              <i class="fas fa-file-pdf"></i>
              <strong> Resume:</strong>{" "}
              <a href={resume} download="Resume" style={styles.a}>
                Click here to download resume in PDF
              </a>
            </li>
          </ul>
          <br />
          <br />
        </div>
      </section>
    </main>
  );
}

export default Contact;
