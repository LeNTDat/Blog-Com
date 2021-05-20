import React from "react";
import "../../assets/mainpage.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default class Mainpage extends React.Component {
  render() {
    const isOpen = false;
    const toggle = false;
    return (
      <>
        {/* header  navbar*/}
        <header>
          {/* menu */}
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Blog Go</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="">
                      <FaGooglePlusG />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <FaFacebook />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <FaInstagram />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <FaTwitter />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <div className="slogan-blog d-flex justify-content-center">
            <div>
              <div className="">
                <hr className="line-break " />
              </div>
              <h1>Single Blog For You</h1>
              <div>
                <hr className="line-break" />
              </div>
            </div>
          </div>
        </header>

        {/* content body */}
        <div className="main-content ">
          <div className="col-md-6 m-auto">
            <Card>
              {/* include comment author date */}
              <CardTitle className="text-center" tag="h3">
                The Legend Of Zelda
                <div>
                  <hr className="line-break" />
                </div>
              </CardTitle>
              <div className="d-flex justify-content-between">
                <div className="">Author</div>
                <div className=""> Date </div>
                <div className=""> Comment</div>
              </div>
              <CardImg
                top
                width="100%"
                src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
        <footer>
          <div className="d-flex justify-content-center"></div>
        </footer>
      </>
    );
  }
}
