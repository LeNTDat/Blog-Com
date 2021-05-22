import React from "react";
import { Input, InputGroupAddon, InputGroup } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai"
import {
    FaBlog
} from "react-icons/fa";
const Menumodel = () => {

    return (
        <>
            <div className="mainmenu">
                <div className='list-menu'>
                    <div className='text-center'>
                        <h3>
                            <FaBlog size="1.5em" color="#6b6e72" />
                            log Go
                        </h3>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Post</li>
                        <li>Theme</li>
                        <li>Contract</li>
                        <li>Log Out</li>
                    </ul>
                </div>
                <div className="line-break">
                    <hr />
                </div>
                <div className='menu-search'>
                    <h3>
                        Search Topic
                    </h3>
                    <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend"><AiOutlineSearch size="2em" /> </InputGroupAddon>
                        <Input />
                    </InputGroup>
                    <div className="search-menu">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Menumodel;