import React from "react";
import Navbarmenu from "../client/navbarmenu";
import "../../assets/mainpage.scss";
import Mainfooter from "./mainfooter";
import Postcontent from "./postcontent";
import Sloganblog from "./sloganblog";

export default class Mainpage extends React.Component {
  state = {
    isToggle: false,
  };

  handleToggle = () => {
    this.setState({
      isToggle: !this.state.isToggle,
    })
  }



  render() {
    return (
      <>

        {/* header  navbar*/}
        <header >
          {/* menu */}
          <Navbarmenu
            handleToggle={this.handleToggle}
            isToggle={this.state.isToggle}
          />
          <Sloganblog />
        </header>
        {/* component include content  */}
        <Postcontent />
        {/* component footer */}
        <footer className="d-flex justify-content-center">
          <Mainfooter />
        </footer>
      </>
    );
  }
}
