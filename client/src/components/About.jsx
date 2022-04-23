import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1 className="text-danger">Who we are?</h1>
        <p>
        Welcome to Piyush Pizza Shop, your number one source for all pizzas. We're dedicated to providing you the very best of pizzas, with an emphasis on pizzas, pasta, and many more.
		Founded in 2021 by Piyush Gupta, Piyush Pizza Shop has come a long way from its beginnings in Mumbai. When Piyush Gupta first started out, his passion for pizza drove them to start their own business.

		We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <h1 className="my-4 text-danger">Our Speciality</h1>
        <Row>
          <Col md={6}>
            <h2 className="text-success">Farmhouse Pizza</h2>
            <p>
              As the name suggests, the farmhouse pizza is loaded with various fresh vegetarian
               toppings. Crunchy and crisp capsicum, juicy tomatoes, and succulent mushrooms. 
            </p>
            <h4><i>Farmhouse pizza comes in Different Sizes</i></h4>
            <p>
            Because, why not? We all know there is no one-size-fits-all rule, and the same applies on pizzas. Just because one person feels a small Domino’s farmhouse pizza is enough to satiate his hunger, doesn’t mean another person will also feel the same. S/he may need a bigger size pizza to curb their hunger and pizza cravings. Hence to satisfy every pizza lover's hunger, Piyush Pizza Shop offers its pizza in three different sizes.
            </p>
          </Col>
          <Col md={6}>
            <img src="images/farmhouse.jpg" alt="" />
          </Col>
        </Row>
        <Row>
          <h1 className="my-4 text-danger">Our Chefs</h1>
          <Col md={3}>
            <img src="images/Chef1.jpg" style={{"height": "300px", "width": "300px"}} alt="" />
            <h5 className="text-center text-warning">Chef Maria</h5>
          </Col>
          <Col md={3}>
            <img src="images/Chef2.jpg" style={{"height": "300px", "width": "300px"}} alt="" />
            <h5 className="text-center text-warning">Chef Lily</h5>
          </Col>
          <Col md={3}>
            <img src="images/Chef3.jpg" style={{"height": "300px", "width": "300px"}} alt="" />
            <h5 className="text-center text-warning">Chef Jim</h5>
          </Col>
          <Col md={3}>
            <img src="images/Chef4.jpg" style={{"height": "300px", "width": "300px"}} alt="" />
            <h5 className="text-center text-warning">Chef Phil</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
