'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post('https://us-central1-bute-backend.cloudfunctions.net/app/atcEmail', formData)
      .then((res) => {
        toast.success('Successfully submitted!');
        setFormData({
          name: '',
          email: '',
          number: '',
          message: '',
        });
        setLoading(false);
      })
      .catch((err) => {
        toast.error('There was a problem submitting your form.');
        setLoading(false);
      });
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          containerStyle={{
            fontSize: '1rem',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="#0">0114 343 476</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>
                  No 542, Sri Sangaraja Mawatha
                  <br />
                  Colombo 10.
                </p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>info@asiatradecentre.com</p>
              </div>

              <div className="social-icon mt-50">
                <a
                  href="https://www.facebook.com/@asiatradecentre/"
                  target="_blank"
                  className="hover-anim"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form
                id="contact-form"
                className="form2"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                        onChange={handleChange}
                        value={formData.name}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="number"
                        name="number"
                        placeholder="Mobile Number"
                        required="required"
                        onChange={handleChange}
                        value={formData.number}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                        onChange={handleChange}
                        value={formData.message}
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="text">Let&lsquo;s Wait</span>
                        ) : (
                          <span className="text">Let&lsquo;s Talk</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;