import React,{useState} from "react";
import logo from "../../assets/logo.png";
import imgs from "../../assets/firstpageimg-removebg-preview.png";
import burger from "../../assets/burgers-removebg-preview.png"
import { AiOutlineGithub } from "react-icons/ai";
import { SiWebflow } from "react-icons/si";
import "./front_side.css";
const Front_side = () => {
  const [tags, setTags] = useState(false);
  const toggle =()=>{
    setTags(!tags)
  }
  return (
    <div  className="main_div">
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="background_color"></div>
          <div className="container d-flex justify-content-between  p-0 mx-auto ">
            <img src={logo} className="logo_imag navbar-brand rounded-circle" />
            <div className="navbar_first_div">
              <div
                className=" navbar-collapse justify-center"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav ">
                  <a className="nav-link top active" aria-current="page" href="#freelancer_main_div">
                    Freelancer
                  </a>
                  <a className="nav-link top " href="#main_div_details"> 
                    Skills
                  </a>
                  <a className="nav-link top " href="#projects_main_div">
                    Projects
                  </a>
                  <a className="nav-link top" href="#contact_main_div">contact</a>
                  <a className="nav-link social_top ">
                  <div className="socila_links_div">
                  <a className="social_link" href="https://github.com/madhusudhan123-star">
                    <AiOutlineGithub />
                  </a>
                  <a className="social_link" href="https://webflow.com/">
                    <SiWebflow />
                  </a>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="not_navbar">
        <div className="black_color">
        </div>
        <div className="name_Title">
          <h1 className="head_name">Madhu sudhan</h1>
        </div>
        <div className="white_line">
          <div className="white_block"></div>
        </div>
        <div className="white_line2">
          <div className="white_block2"></div>
        </div>
        <div className="image_div">
          <img src={imgs} className={"front_image" + (tags  ? " front_images" : "")} />
          <div className="name_title">
            <h2 className="head_title_1">Front-End</h2>
            <h2 className="head_title_2">developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Front_side;
