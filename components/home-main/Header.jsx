'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header main-header bg-img valign"
      data-background="/assets/imgs/background/bg5.jpg"
      data-overlay-dark="7"
    > 
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-11">
            <div className="caption">
              <h1>Your One-Stop for</h1>
              <div className="d-flex align-items-end">
                <div>
                  <h1 className="nowrap">
                    <span className="main-color">Premium</span> <br /> Building Materials.
                  </h1>
                </div>
                <div>
                  <div className="text ml-30">
                    <p>
                    As a trusted leader in Sri Lanka, we specialize in crafting world-class aluminum extrusion profiles for commercial, industrial, residential, and architectural applications,{' '}
                      <span className="text-light fw-600">
                      delivering solutions that drive innovation and 
                      </span>{' '}
                      shape industries globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-80">
          <div className="col-lg-6 order-md-2">
            <div className="icon-img">
              <img src="/assets/imgs/icon-img/arrow-down-big.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end order-md-1">
            <div className="info">
              <h2 className="mb-10">100k +</h2>
              <h6>
                Clients
                <br />
                <span className="main-color">Globally</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
