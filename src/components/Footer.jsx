import React from "react";
import woodies2 from "../assets/image/png/wooddies2.png";

const Footer = () => {
  return (
    <footer className="mt-lg-5 mt-0 pt-5">
      <div className="mt-lg-4 mt-0 study_img">
        <div className="my_container py-4">
          <div className="row align-items-center justify-content-md-between justify-content-center w-100 my-md-5 my-4 py-lg-3 py-2">
            <div className="col-md-6 col-12 text-md-start text-center">
              <p className="fs_18 fw-bold text-black ">
                Subscribe to our newsletter
              </p>
              <p className="fs_16 fw-normal text-black">
                A monthly digest of the new WOODIES products, hot offers, and
                resources.
              </p>
            </div>
            <div className="col-md-6 col-sm-8 col-12 mt-md-0 mt-3">
              <div className="d-flex align-items-center w-100">
                <input
                  type="email"
                  className="input_ fs_16 fw-normal"
                  placeholder="Your email address"
                />
                <button className="fs_16 fw-semibold subscribe_" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <hr className="footer_width mt-4 pt-3" />
          <div className="row justify-content-lg-between align-items-end  justify-content-md-start justify-content-center text-sm-start text-center footer_width mt-4">
            <div className="col-lg-4 col-12 text-lg-start text-center">
              <div>
                <img src={woodies2} alt="woodies2" />
              </div>

              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  (012) 8967453
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  woodies@gmail.com
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  woodies@gmail.com
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-sm-3 col-6 mt-lg-0 mt-4">
              <p className="fs_18 fw-semibold " style={{ color: "#333333" }}>
                Product
              </p>

              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Furnitures
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Packages
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Services
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-sm-3 col-6 mt-lg-0 mt-4">
              <p className="fs_18 fw-semibold " style={{ color: "#333333" }}>
                Resources
              </p>

              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Blog
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  FAQs
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-sm-3 col-6 mt-lg-0 mt-4">
              <p className="fs_18 fw-semibold " style={{ color: "#333333" }}>
                Company
              </p>

              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  About Us
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Jobs
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Our Team
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-sm-3 col-6 mt-lg-0 mt-4">
              <p className="fs_18 fw-semibold " style={{ color: "#333333" }}>
                Follow Us
              </p>

              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Facebook
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Instagram
                </a>
              </div>
              <div className="mt-sm-3 mt-1">
                <a
                  className="fs_14 fw-normal d-inline-block "
                  style={{ color: "#8D8D8D" }}
                  href=""
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center">
            <a
              className="fs_12 fw-semibold d-inline-block"
              style={{ color: "#8d8d8d" }}
              href="*"
            >
              © 2020 WOODIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
