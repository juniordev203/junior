import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../particle";
import Home2 from "./home2";
import Type from "./type";
import About from "../about/about"

function Home() {
    return (
        <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Xin chào!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="heading-name">
                  Tôi là 
                  <strong className="main-name">
                    {" "}
                    Phạm Huy Hoàng.{" "}
                  </strong>
                   Bạn có thể gọi tôi là
                  <strong className="main-name">{" "}_juniordev !</strong>
                </h1>
  
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
        <About />
      </section>
    );
}
export default Home;