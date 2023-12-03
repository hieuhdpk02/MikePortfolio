import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import movie from "../../Assets/Projects/B9CAE685-CE83-49FA-917A-C62560D49621_1_105_c.jpeg"
import myshoe from "../../Assets/Projects/Screenshot 2023-12-03 at 21.30.23.png"

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
              imgPath={movie}
              isBlog={false}
              title="Movie"
              description=
              "Welcome to the best online movie watching experience! With a diverse library, sharp image quality, and completely free, we are committed to bringing you unlimited entertainment moments. Limited time. Enjoy now and explore the world of cinema at our address!"
              demoLink="https://phim-moi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myshoe}
              isBlog={false}
              title="My Shoes"
              description="Explore the world of foot fashion at the leading shoe shopping website. With a variety of styles, quality materials and excellent service, we bring you a classy shoe shopping experience. Book Take your step into the fashion world today!"
            />
          </Col>

        

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
