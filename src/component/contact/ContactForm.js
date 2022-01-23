import React from 'react'
import { Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_8hc2buq",
            "template_883gvt8",
            e.target,
            "user_Cr6Qp54sK2BTfTjQGArlk"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        debugger;
    
        e.target.reset();
      };

    return (
        <Form onSubmit={sendEmail}>
          <Row className="row pt-5 mx-auto">
            <Col lg={6} className="form-group mx-auto">
              <div>
                <legend>Contact Information</legend>
              </div>
              <div>
                <label htmlFor="name" className="required Name pt-3 pb-2">
                  Name<small>(required)</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your First and Last name"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="pt-3 pb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  name="company"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="email" className="required pt-3 pb-2">
                  E-Mail<small>(required)</small>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your E-Mail address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="pt-3 pb-2">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone number"
                />
              </div>
            </Col>
            <Col lg={6}  className="form-group pt-2 mx-auto">
              <div>
                <legend>Further information</legend>
              </div>

              <div className="form-check pt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="callback-request"
                  value=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Callback request
                </label>
              </div>
              <label htmlFor="message" className="required pt-3 pb-2">
                Message<small>(required)</small>
              </label>
              <Form.Control
                as="textarea"
                cols="30"
                rows="7"
                className="form-control"
                name="message"
                id="message"
                placeholder="Your Message"
                required
              />
              <div>
                <input
                  type="submit"
                  className="btn btn-info text-light pt-2 pb-2 mt-3 mb-3"
                  value="Send Message"
                />
              </div>
            </Col>
          </Row>
        </Form>
    )
}
