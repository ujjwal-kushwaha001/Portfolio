import React from "react";

const summary = () => {
  return (
    <>
      <div
        id="about"
        className="summary-section d-flex flex-column m-auto w-80"
      >
        <h2>About Me</h2>
        <div className="d-flex m-auto w-100">
          <div className="left d-flex flex-column justify-content-center w-40">
            <p>
              Hello, my name is Ujjwal Kushwaha. I've recently completed my
              diploma in Computer Engineering from{" "}
              <a href="https://aiet.edu.in/">
                Apollo Institute of Engineering and Technology
              </a>
              . During my studies, I've developed a strong foundation in
              frontend technologies. I'm highly proficient in HTML, CSS, and
              JavaScript, and I have practical experience with modern frameworks
              and libraries like React.{" "}
            </p>
            <p>
              I'm also skilled in styling frameworks such as Tailwind CSS and{" "}
              Bootstrap. Additionally, I have some backend knowledge with
              Node.js, which helps me understand the full stack. I am eager to
              apply my skills to a frontend development position and contribute
              to a dynamic team.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default summary;
