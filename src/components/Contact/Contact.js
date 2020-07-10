import React from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      emailSubmit: "waiting",
    };
  }

  render() {
    const { emailSubmit } = this.state;
    const that = this;
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm("jjprest", "jjprest", e.target, "user_5MUkC4ZCaUbpt4fFPHiYq")
        .then(
          (result) => {
            console.log(result.text);
            that.setState({ emailSubmit: "submitted" });
            console.log(that.state.emailSubmit);
          },
          (error) => {
            console.log(error.text);
            that.setState({ emailSubmit: "error" });
          }
        );
    }
    return (
      <div className="backgroundOverlay">
        <div className="contentContainer">
          <div className="formContainer ph3 pt3">
            <div className="contactCard cardBG shadow-5 hidden br4 center">
              <p className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">Contact</p>
              {emailSubmit === "waiting" && (
                <form className="white center" onSubmit={sendEmail}>
                  <h1>Get in touch with us</h1>
                  <h2 className="f5">
                    Or email us directly at:{" "}
                    <a className="white" href="mailto:info@nomadicorchestra.com">
                      info@nomadicorchestra.com
                    </a>
                  </h2>
                  <div className="flex flex-wrap mt3 mh4">
                    <div className="tl measure mr5">
                      <label htmlor="name" className="f6 b  mb2">
                        Name:
                      </label>
                      <input
                        id="name"
                        className="input-reset ba b--near-black pa2 mb2 w-100"
                        type="text"
                        aria-describedby="name-desc"
                        name="user_name"
                      />
                    </div>
                    <div className="tl measure">
                      <label htmlFor="email" className="tl f6 b  mb2">
                        Email:
                      </label>
                      <input
                        id="email"
                        className="input-reset ba b--near-black pa2 mb2  w-100"
                        type="email"
                        aria-describedby="name-desc"
                        name="user_email"
                      />
                    </div>
                  </div>

                  <div className="tl mh4">
                    <label htmlFor="name" className="tl f6 b db mb2">
                      Enquiry:
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      className="border-box hover-black ba shadow-5 b--near-black pa2 mb2"
                      aria-describedby="comment-desc"
                      name="message"
                    ></textarea>
                  </div>
                  <input
                    className="center f6 f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-near-black white pointer w-100 w-25-m w-20-l br2-ns mb3"
                    type="submit"
                    value="Submit Email"
                  />
                </form>
              )}
              {emailSubmit === "submitted" &&
              <div>
                <h1>Thank You For Getting in Touch With Us!</h1>
                <h2>Your email has been submitted and we will get back to you as soon as possible.</h2>
              </div>
              }
              {emailSubmit === "error" &&
              <div>
                <h1>We're sorry!</h1>
                <h2>There was an error when submitting your email. Please try again or contact us directly via email at:</h2>
                <a href="mailto:info@nomadicorchestra.com">info@nomadicorchestra.com</a>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;