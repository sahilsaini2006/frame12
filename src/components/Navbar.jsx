import React from "react";
import { Link } from "react-router-dom";
import faveicon from "../assets/image/png/woodies.png";

const Navbar = () => {
  return (
    <>
      <div className="my_container">
        <div className="d-flex justify-content-between align-items-center my-3 py-1">
          <div className="d-flex gap-2 align-items-center">
            <img className="w-100" src={faveicon} alt="woodies" />
          </div>

          <nav>
            <ul className="d-flex align-items-center gap-5 d-none d-lg-flex">
              <li>
                <Link to="/" className=" link_btn text_gray fs_16 fw-normal">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className=" link_btn text_gray fs_16 fw-normal">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/Features"
                  className=" link_btn text_gray fs_16 fw-normal"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  to="/Pricing"
                  className=" link_btn text_gray fs_16 fw-normal"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/Testimonials"
                  className=" link_btn text_gray fs_16 fw-normal"
                >
                  Testimony
                </Link>
              </li>
              <li>
                <Link to="/Register" className="sign_up_btn fw-bold fs_16">
                  Sign up
                </Link>
              </li>
            </ul>
            <div className="d-lg-none  hamburger_menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
