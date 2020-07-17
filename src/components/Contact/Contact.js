import React from "react";
import emailjs from "emailjs-com";
import ClipLoader from "react-spinners/ClipLoader";

import "./Contact.css";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      emailSubmit: "waiting",
      loading: "loaded",
    };
  }

  render() {
    const { emailSubmit, loading } = this.state;
    const that = this;
    function sendEmail(e) {
      that.setState({ loading: "loading" });
      e.preventDefault();

      emailjs
        .sendForm("nomadicorchestra", "nomadicorchestra", e.target, "user_Jx8Ful3Z2RHyXEgAu93p2")
        .then(
          (result) => {
            console.log(result.text);
            that.setState({ emailSubmit: "submitted", loading: "loaded" });
          },
          (error) => {
            console.log(error.text);
            that.setState({ emailSubmit: "error", loading: "loaded" });
          }
        );
    }
    return (
      <div className="backgroundOverlay">
        {loading === "loading" && (
          <div className="loading">
            <div>
              <h1 className="">sending message</h1>
              <div className="">
                <ClipLoader size={40} color={"black"} />
              </div>
            </div>
          </div>
        )}
        <div className="contentContainer">
          <div className="formContainer ph3 pt3">
            {emailSubmit === "waiting" && (
              <div className="contactCard cardBG shadow-5 hidden br4 center">
                <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                  Contact
                </h1>
                <form className="white center" onSubmit={sendEmail}>
                  <h1>Get in touch with us</h1>
                  <h2 className="f5">
                    Or email us directly at:{" "}
                    <a
                      className="white"
                      href="mailto:info@nomadicorchestra.com"
                    >
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
                        required
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
                        required
                      />
                    </div>
                  </div>

                  <div className="tl mh4">
                    <label htmlFor="name" className="tl f6 b db mb2">
                      Message:
                    </label>
                    <textarea
                      id="comment"
                      className="border-box hover-black ba shadow-5 b--near-black pa2 mb2"
                      aria-describedby="comment-desc"
                      name="message"
                    ></textarea>
                  </div>
                  <input
                    className="f6 grow br-pill ph3 pv2 mb2 dib white bg-black-50 bg-animate hover-bg-near-black ba b--black pointer"
                    type="submit"
                    value="Send Message"
                  />
                </form>
              </div>
            )}

            {emailSubmit === "submitted" && (
              <div className="contactCard cardBG shadow-5 hidden br4 center measure white pb2">
                <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                  Contact
                </h1>
                <div>
                  <h1>Thank You</h1>
                  <h2>for getting in touch with us!</h2>
                  <p className="pa4">
                    Your message has been sent to us and we will get back to you
                    as soon as we can.
                  </p>
                  <button
                    className=" f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black-50 bg-animate pointer hover-bg-near-black ma3"
                    onClick={() => this.setState({ emailSubmit: "waiting" })}
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}
            {emailSubmit === "error" && (
              <div className="contactCard cardBG shadow-5 hidden br4 center measure white pb2">
                <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                  Contact
                </h1>
                <div>
                  <h1>We're sorry!</h1>
                  <p className="ph4">
                    There seems to have been an error in sending your message.
                    Please try again or contact us directly at the following
                    email address:
                  </p>
                  <div>
                    <a
                      className="white"
                      href="mailto:info@nomadicorchestra.com"
                    >
                      info@nomadicorchestra.com
                    </a>
                  </div>
                  <button
                    className=" f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black-50 bg-animate pointer hover-bg-near-black ma3"
                    onClick={() => this.setState({ emailSubmit: "waiting" })}
                  >
                    Try sending another message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;