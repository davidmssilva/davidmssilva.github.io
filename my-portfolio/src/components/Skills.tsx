import React from "react";

const Skills = () => (
  <section className="section skills" data-aos="fade-up">
    <div className="container">
      <h2>Skills</h2>
      <div className="skills-bubbles">
        {[
          "Python",
          "TypeScript",
          "JavaScript",
          "Angular",
          "React",
          "Node.js",
          "MongoDB",
          "Snowflake",
          "SQL",
          "Docker",
          "Jenkins",
          "Figma",
          "Git",
          "Jira",
          "Agile",
          "Scrum",
          "AWS S3",
          "Unity",
          "Redis",
          "InfluxDB",
        ].map((skill) => (
          <div className="skill-bubble" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
