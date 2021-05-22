import React from "react";
import "../../assets/mainpage.scss";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

import { AiOutlineMenu, AiOutlineYoutube } from "react-icons/ai";
import Menumodel from "./menumodel";
const Navbarmenu = (props) => {
    return (
        <>
            <div>
                <Navbar color="light" light expand="md">
                    <Collapse className="d-flex justify-content-between" navbar>
                        <NavbarBrand href="/">Blog Go</NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="https://www.youtube.com/channel/UCNbs49hDhWVgKiAfdxobvdQ">
                                    <AiOutlineYoutube size="1.3em" />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.facebook.com/">
                                    <FaFacebook size="1.3em" />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.instagram.com/?hl=vi">
                                    <FaInstagram size="1.3em" />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://twitter.com/tweeter">
                                    <FaTwitter size="1.3em" />
                                </NavLink>
                            </NavItem>
                        </Nav>
                        {/*  */}
                        <NavbarText className="icon-menu-nav ">
                            <NavLink>
                                <div className="p-2 bd-highlight">
                                    <AiOutlineMenu size="1.5em" onClick={props.handleToggle} />
                                    {/*  transform: rotate(20deg); */}
                                </div>
                            </NavLink>
                        </NavbarText>
                        {/* menu */}
                        {props.isToggle ? <Menumodel /> : ""}
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Navbarmenu;