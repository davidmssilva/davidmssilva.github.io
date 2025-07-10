import React from "react";

const Experience = () => (
  <section className="section experience" data-aos="fade-up">
    <div className="container">
      <h2>Professional Experience</h2>
      <div>
        <h3>2022 – Present</h3>
        <p>
          <strong>Software Engineer, Cisco Systems, Portugal</strong>
          <br />
          At Cisco, I work on a scalable microservices platform, building
          backend services with REST APIs and crafting modular front-end
          components—think dynamic tables, reusable widgets, and solid unit
          testing. I’ve also built data ingestion scripts pulling from various
          sources to keep things flowing smoothly. I’m involved end-to-end on
          features, from gathering requirements and prototyping solutions to
          coordinating with cross-functional teams using Agile and TDD. One cool
          project I led was creating a Python workflow that uses GenAI to
          replace a manual task, saving about an hour every time a developer
          runs it. I helped push adoption of a standardized case categorization
          model to over 90% by building custom data scripts and creating
          intuitive UI visualizations. I also tackled some serious security
          fixes—patching vulnerabilities like NoSQL injections and unsafe
          inputs. On the ops side, I built a query approval system that cut down
          processing load by stopping unused queries from piling up. Outside
          coding, I co-lead Cisco’s Emerging Talent Portugal Chapter (~250 core
          members), where I organize workshops, mentor peers, handle budgets and
          communications, and boost team spirit. Tech stack: Python, TypeScript,
          Node.js, Angular, MongoDB, Snowflake
        </p>
      </div>
      <div>
        <h3>2016 – 2017</h3>
        <p>
          <strong>Software Development Intern, FAS Sistemas, Portugal</strong>
          <br />
          During my internship, I built software to automate document
          management—detecting invoices, scanning with OCR, and organizing files
          internally. I also developed a Chrome extension to scrape data from
          webpages and implemented printing solutions integrated with data
          processing scripts and the main app. Tech stack: AutoIT, JavaScript
        </p>
      </div>
    </div>
  </section>
);

export default Experience;
