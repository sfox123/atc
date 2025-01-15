'use client';
import React, { useEffect } from 'react';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <img src="/assets/imgs/logo-light.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Services</span>
              </a>
              <div className="dropdown-menu mega-menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg">
                      <a className="item-img text-center" href="/home-main">
                        <span className="img">
                          <img src="/assets/imgs/menu/1.jpg" alt="" />
                        </span>
                        <span className="mt-15">Aluminium</span>
                      </a>
                    </div>
                    <div className="col-lg">
                      <a
                        className="item-img text-center"
                        href="/home-modern-studio"
                      >
                        <span className="img">
                          <img src="/assets/imgs/menu/2.jpg" alt="" />
                        </span>
                        <span className="mt-15">Aluminium Accessories</span>
                      </a>
                    </div>
                    <div className="col-lg">
                      <a
                        className="item-img text-center"
                        href="/home-creative-agency"
                      >
                        <span className="img">
                          <img src="/assets/imgs/menu/3.jpg" alt="" />
                        </span>
                        <span className="mt-15">Ceiling</span>
                      </a>
                    </div>
                    <div className="col-lg">
                      <a
                        className="item-img text-center"
                        href="/home-digital-agency"
                      >
                        <span className="img">
                          <img src="/assets/imgs/menu/4.jpg" alt="" />
                        </span>
                        <span className="mt-15">Partition</span>
                      </a>
                    </div>
                    <div className="col-lg">
                      <a className="item-img text-center" href="/home-personal">
                        <span className="img">
                          <img src="/assets/imgs/menu/5.jpg" alt="" />
                        </span>
                        <span className="mt-15">Rubber Beading</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Contact Us</span>
              </a>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">About us</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/portfolio-gallery">
                  Gallery
                </a>
                <a className="dropdown-item" href="/portfolio-creative">
                  Portfolio Creative
                </a>
                <a
                  className="dropdown-item"
                  href="/portfolio-creative-carousel"
                >
                  Creative Carousel
                </a>
                <a className="dropdown-item" href="/portfolio-grid">
                  Portfolio Grid
                </a>
                <a className="dropdown-item" href="/portfolio-masonry">
                  Portfolio Masonry
                </a>
                <a className="dropdown-item" href="/project-details">
                  Project Details
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/page-contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Let&apos;s contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
