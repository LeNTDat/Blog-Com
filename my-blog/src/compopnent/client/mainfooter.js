import React from "react";
import "../../assets/mainpage.scss";
import {
    Col,
    Row,
} from "reactstrap";
import {
    FaBlog
} from "react-icons/fa";

const Mainfooter = () => {
    return (
        <>
            <div className="about-left aligh-center ">
                <Row>
                    <Col>Terms</Col>
                    <Col> Privacy </Col>
                    <Col>Security</Col>
                    <Col>Status</Col>
                    <Col>Docs</Col>
                </Row>
            </div>
            <div className="icon-blog">
                <Row>
                    <Col> <FaBlog size="1em" /></Col>
                </Row>
            </div>
            <div className="about-right ">
                <Row>
                    <Col>Contract</Col>
                    <Col>Pricing</Col>
                    <Col>Training</Col>
                    <Col>Blog</Col>
                    <Col>About</Col>
                </Row>
            </div>
        </>
    )
}

export default Mainfooter;