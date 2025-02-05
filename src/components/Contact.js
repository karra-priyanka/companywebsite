import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="nav1">
        <p className="m-3 con text-primary">
          <a
            href="/home"
            className=""
            style={{ textDecoration: "none", color: "black" }}
          >
            Home /
          </a>
          Contact Us
        </p>
      </div>

      <div className="contact-page container-fluid"><br></br>
        <h5 className="mt-4 text-center mb-4 head">Contact Us</h5>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="d-flex flex-row mb-5">
              <div className="ico2 text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  className="bi bi-geo-alt "
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
              <div className="ms-3">
                <h5 className="text-primary Address1">Address</h5>
                <p>
                  SRNR IT Solutions, Flat No:102, Srinilaya Apartments, Opp. SR
                  Nagar New Police Station, S.R.Nagar, Hyderabad-500038
                </p>
              </div>
            </div>

            <div className="d-flex flex-row mb-5">
              <div className="ico text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
              </div>
              <div className="ms-3">
                <h5 className="text-primary"> Let's Connect</h5>
                <p>(+91) 949-475-1795</p>
              </div>
            </div>

            <div className="d-flex flex-row mb-5">
              <div className="ico text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Email</h5>
                <p>srnritsolutions@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-8">
            <div className=" mt-3 mb-3">
              <input
                type="text"
                className="form-control div1 mb-3"
                placeholder="Your Name"
                disabled
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="form-control div1 mb-4"
                disabled
              />
              <input
                type="text"
                placeholder="Subject"
                className="form-control div1 mb-4"
                disabled
              />
              <textarea
                placeholder="Message"
                className="form-control div1 mb-3"
                rows="5"
                disabled
              ></textarea>
              <button className="btn btn-primary w-15 mt-5">Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
