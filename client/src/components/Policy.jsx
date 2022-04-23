import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Terms and policy</h1><br />
        <Row>
          <Col md={10}>
            <h5 style={{fontWeight: "bold"}}> 
            Welcome to Piyush Pizza Shop!
            </h5>
            <p>
            {/* These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at Website.com. */}

            By accessing this website we assume you accept these terms and conditions.<br /> Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.

            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>
            <h5 style={{fontWeight: "bold"}} > 
              Cookies
            </h5>
            <p>
			We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement with the Company Name's Privacy Policy.

			Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>
            <h5 style={{fontWeight: "bold"}} > 
              License
            </h5>
            <p>
			Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.<br />
			You must not: 
			<ul>
				<li>Republish material from Website Name</li>
				<li>Sell, rent or sub-license material from Website Name</li>
				<li>Reproduce, duplicate or copy material from Website Name</li>
				<li>Redistribute content from Website Name</li>
			</ul>
            </p>
            <h5 style={{fontWeight: "bold"}} > 
			Hyperlinking to our Content
            </h5>
            <p>
			The following organizations may link to our Website without prior written approval:
			<ul>
				<li>Search engines;</li>
				<li>News organizations;</li>
				<li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
				<li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
			</ul>
			These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
            </p>
            <h5 style={{fontWeight: "bold"}} > 
				Reservation of Rights
            </h5>
            <p>
			We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>
            <h5 style={{fontWeight: "bold"}} > 
            Content Liability
            </h5>
            <p>
			We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
