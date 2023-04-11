import React from "react";
import "./details.css";
const Details = () => {
  return (
    <div id="main_div_details" className="main_div_details">
    <div className="fourth_line"></div>
      <div className="second_main_div">
        <div className="one_section_details">
          <p className="one_details_para">HTML, CSS, Bootstrap, 
          SASS and etc. Front-end developers are responsible for 
          building the visible and interactive elements of 
          a website or application that users interact with 
          directly</p>
          <h1 className="one_details_head">Development</h1>
        </div> 
        <div className="one_section_details_design">
          <div className="small_line">
            <div className="small_one"></div>
            <div className="small_two"></div> 
          </div>
          <p className="one_details_para_design">Has a developer 
          I should Have know frameworks also such as React. I 
          have good skills in developing React website like 
          dynamic and static website</p>
          <h1 className="one_details_head_design">Frameworks</h1>
        </div><div className="one_section_details">
          <p className="one_details_para"> The language I learned are<br/>
          Javascript<br/>
          Node.js<br/>
          Python<br/>
          C<br/> 
          </p>
          <h1 className="one_details_head">Language</h1>
        </div>
      </div>
      <div className="third_line"></div>
    </div>
  )
};

export default Details;
