import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const screenshots = [
  { src: "/screenshots/shot1.png", caption: "Dockerfile Build" },
  { src: "/screenshots/shot2.png", caption: "AWS IAM Setup" },
  { src: "/screenshots/shot3.png", caption: "Terraform Init" },
  { src: "/screenshots/shot4.png", caption: "Kubernetes Pods" },
  { src: "/screenshots/shot5.png", caption: "Jenkins Pipeline" },
  { src: "/screenshots/shot6.png", caption: "VPC Architecture" },
];

function ScreenshotCard({ src, caption }) {
  return (
    <div style={{ padding: "10px" }}>
      <img src={src} alt={caption} style={{ width: "100%", borderRadius: "10px" }} />
      <p style={{ textAlign: "center", color: "#fff" }}>{caption}</p>
    </div>
  );
}

function ScreenshotGallery() {
  return (
    <Container style={{ paddingTop: "40px" }}>
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "30px" }}>
        DevOps Project <span style={{ color: "#c678dd" }}>Screenshots</span>
      </h1>
      <Row>
        {screenshots.map((s, i) => (
          <Col md={4} key={i}>
            <ScreenshotCard src={s.src} caption={s.caption} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ScreenshotGallery;

