import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { Map,GoogleApiWrapper } from "google-maps-react"
import GoogleMaps from "./GoogleMaps";
const Contact = () => {
  return (
    <>
		<Image
			src="images/contactpizza.jpg"
			style={{ width: "100%", height: "400px" }}
		/>
		<Container>
			<h1 style={{"color": "red","marginTop": "25px","fontSize": "3rem"}}>Contact Us</h1>
			<hr style={{"border": "2px solid red"}} />
		</Container>
		<Container className="my-5">
			<Row>
       			<Col md={4}>
					<h1 style={{"fontSize": "1rem","fontWeight": "bold"}}>Piyush Pizza Pizza Shop Limited</h1>
					<p>20, Matru Ashish, 39 Nepean Sea Road,
					Mumbai - 400036.</p>
				</Col>
				<Col md={4}>
					<h1 style={{"fontSize": "1rem","fontWeight": "bold"}}>Contact Numbers</h1>
					<FiPhoneCall style={{"color": "red"}} /> &nbsp;
					Tel : 022 2367 9421 / 2367 4628<br />
					<ImMobile style={{"color": "red"}} /> &nbsp;
					Mobile : 9864034654
				</Col>
				<Col md={4}>
					<h1 style={{"fontSize": "1rem","fontWeight": "bold"}}>Email</h1>
					<AiOutlineMail style={{"color": "red"}} /> &nbsp;
					feedback@piyushpizzashop.com
				</Col>
			</Row>
		</Container>
		<Container style={{marginBottom: "50px"}}>
			<h1 style={{"fontSize": "1rem","fontWeight": "bold"}}>Office Timings</h1>
			Monday to Friday : 12pm to 9pm <br />
			Saturday : 12pm to 6pm
		</Container>
		{/* <Container className="my-5">
			<Row>
				<Col md={4}>
					<GoogleMaps />
				</Col>
			</Row>
		</Container> */}
		<div style={{height: '200px', width: '200px'}}>
			<GoogleMaps />
		</div>
    </>
  );
};

export default Contact;
