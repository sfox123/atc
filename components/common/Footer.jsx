import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                No 542, Sri Sangaraja Mawatha <br /> Colombo 10.
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="#0">info@atc.lk</a>
              </h6>
              <a href="#0" className="underline">
                <span className="fz-22 main-color">+94 76 017 9570</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/page-about">Services</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Contact us</a>
                </li>
                <li className="mb-15">
                  <a href="/blog-grid-sidebar">About us</a>
                </li>
                <li>
                  <a href="https://alumexgroup.com/" target="_blank">
                    ALUMEX
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-anim cursor-pointer">
                  <a
                    href="https://www.facebook.com/@asiatradecentre/"
                    target="_blank"
                    className="hover-this"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://www.linkedin.com/company/alumex-plc/"
                    target="_blank"
                    className="hover-anim"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2024 ATC{" "}
              <span className="underline main-color">
                <a href="#" target="_blank">
                  All rights reserved.
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
