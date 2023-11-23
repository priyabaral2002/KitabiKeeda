import React from "react";
import "../css/footer.css";
import "../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import { MdHome , MdEmail , MdLocalPhone , MdPrint , MdFacebook} from "react-icons/md";
import { LuInstagram , LuTwitter , LuLinkedin , LuGithub} from "react-icons/lu";
const Footer = () => {
  return (
    <div className="f-container">
      
            <hr />
        <div className="f-right">
          <div className="col-md-7 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-6">
          <h4 className="text-uppercase fw-bold mb-4">Contact</h4>
              <p><MdHome className="home" />Sector-105 , Lajpat Nagar , New Delhi</p>
              <p><MdEmail className="email" />info@example.com</p>
              <p><MdLocalPhone className="phone" /> + 01 234 567 88</p>
              <p><MdPrint className="print" /> + 01 234 567 89</p>
          </div>
        </div>
             
          
          <div className="text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              
              <a
                className="btn text-white btn-floating m-1"
                style={{backgroundColor: "#3b5998"}}
                href="https://www.facebook.com/"
                role="button"><MdFacebook />
              </a>
              
              <a
                className="btn text-white btn-floating m-1"
                style={{backgroundColor: "#55acee"}}
                href="https://twitter.com/"
                role="button"><LuTwitter />
                </a>
               
              <a
                className="btn text-white btn-floating m-1"
                style={{backgroundColor: "navy"}}
                href="https://www.linkedin.com/"
                role="button"><LuLinkedin />
              </a>
              
              <a
                className="btn text-white btn-floating m-1"
                style={{backgroundColor:"black" }}
                href="https://github.com/"
                role="button"> <LuGithub /></a>
               <a
                className="btn text-white btn-floating m-1"
                style={{backgroundColor:"red" }}
                href="https://www.instagram.com/"
                role="button"> <LuInstagram /></a>
            </section>
           </div>
           <div className='text-center p-4' style={{color:"black"}}>
             © 2023 Copyright : 
             <a className='text-reset fw-bold' href='#!'> Kitabee Keeda </a>
          </div>
          </div>
        </div>
  
)};
export default Footer;