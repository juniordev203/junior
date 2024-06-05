import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            INTRODUCE <span className="purple"> YOURSELF </span>
            </h1>
            <p className="home-about-body">
              Mình là Hoàng, sinh viên năm cuối <b className="purple">ngành CNTT tại Đại học Kinh tế Quốc dân,</b> biệt danh của mình là junior..
              <br />
              <br />Mình thích đá bóng, mình là fanboy của Neymar Junior, nên đơn giản biệt danh của mình là vậy 🤷‍♂️
              <br />
              <br />
              Mình thích đọc sách, nghe nhạc, đi du lịch, chơi thể thao. Và không thể thiếu các ngôn ngữ lập trình
              <i>
                <b className="purple"> HTML, CSS, Javascript AND ReactJs,... </b> 
                Mình viết trang web này bằng React, mình mới học nó nên chỉ làm được chừng này!
              </i>
              <br />
              <br />
              Hy vọng bạn thích trang web này của mình, đây là website cá nhân và nó có tất cả nội dung về mình.
               Bạn có thể liên hệ với mình qua <i>
                <b className="purple">Email, SĐT hoặc các trang MXH của mình.. </b>
               </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="avatar">
                <img src={myImg} className="img-fluid" alt="avatar" />
            </div>

          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3> <b className="purple">CONNECT</b> WITH ME !</h3>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.instagram.com/huyhoang_p03/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/juniordev203"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/huyhoang203.phh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ph%E1%BA%A1m-huy-ho%C3%A0ng-9339542b6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
