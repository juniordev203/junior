import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCards";
import Particle from "../particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Project 1"
              description="."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Project 2"
              description="."
              ghLink="#"
              demoLink="#"
            />
          </Col>          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Project 3"
              description="."
              ghLink="#"
              demoLink="#"
            />
          </Col>          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Project 4"
              description="."
              ghLink="#"
              demoLink="#"
            />
          </Col>          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Project 5"
              description="."
              ghLink="#"
              demoLink="#"
            />
          </Col>          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Project 6"
              description="."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
