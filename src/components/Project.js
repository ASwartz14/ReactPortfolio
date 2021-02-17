import React from "react";
import notes from "../assets/notetaker.jpg";
import quiz from "../assets/Quiz.png";
import day from "../assets/DayPlanner.png";
import dinner from "../assets/WhatsDin.png";
import "../index.css";

const styles = {
  font: {
    color: "white",
    fontFamily: "Fjalla One",
  },
  a: {
    color: "#d8b2ee",
  },
};
function Project() {
  return (
    <div className="container" style={styles.font}>
      <div class="row">
        <div class="col-md-8"></div>
        <div className="row">
          <div className="col">
            <a
              href="https://cynthiwu.github.io/whats-for-dinner/"
              target="_blank"
            >
              <img src={dinner} alt="What's For Dinner" />
            </a>
            <p>
              {" "}
              A responsive web-based app that allows busy people to input
              ingredients they have on hand and returns recipes.
              <br />
              <a
                href="https://github.com/cynthiwu/whats-for-dinner"
                target="_blank"
                style={styles.a}
              >
                {" "}
                Github Repository{" "}
              </a>
            </p>
          </div>
          <div className="col">
            <a href="https://aswartz14.github.io/TimedQuiz/" target="_blank">
              <img src={quiz} alt="Timed JavaScript Quiz" />
            </a>
            <p>
              {" "}
              A responsive web-based app timed JavaScript Quiz.
              <br />
              <a
                href="https://github.com/ASwartz14/TimedQuiz"
                target="_blank"
                style={styles.a}
              >
                {" "}
                Github Repository{" "}
              </a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="https://aswartz14.github.io/DayPlanner/" target="_blank">
              <img src={day} alt="Day Planner" />
            </a>
            <p>
              {" "}
              A responsive web-based app that helps user keep track of tasks
              with color coded time blocks.
              <br />
              <a
                href="https://github.com/ASwartz14/DayPlanner"
                target="_blank"
                style={styles.a}
              >
                {" "}
                Github Repository
              </a>
            </p>
          </div>
          <div className="col">
            <a href="https://lit-castle-69499.herokuapp.com/" target="_blank">
              <img src={notes} alt="NoteTaker" />
            </a>
            <p>
              {" "}
              A responsive web-based app that helps user keep track of important
              notes.
              <br />
              <a
                href="https://github.com/ASwartz14/Note_Taker"
                target="_blank"
                style={styles.a}
              >
                {" "}
                Github Repository
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
