import "../App.css";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Button from "react-bootstrap/Button";
import { validateEmail } from "../Utils/Utils.js";
import LargeAlert from "./LargeAlert.jsx";
import axios from "axios";
import { BASE_URL, CONTACT_MESSAGE, CREATE } from "../Constants.js";
import { FaCheckCircle } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

@inject("store")
@observer
class ContactSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,

            name: "",
            email: "",
            subject: "",
            message: "",

            buttonText: "Send Message",
            emailError: false,
            messageError: false,
            error: false,
            isSent: false,

            validated: false
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isValidContactMessage = this.isValidContactMessage.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        if (!validateEmail(event.target.value)) {
            this.setState({ emailError: true });
        } else {
            this.setState({ emailError: false });
        }
        this.setState({ email: event.target.value, error: false });
    }

    handleSubjectChange(event) {
        this.setState({ subject: event.target.value, error: false });
    }

    handleMessageChange(event) {
        if (event.target.value !== "") {
            this.setState({ messageError: false });
        }
        this.setState({ message: event.target.value, error: false });
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ error: false, validated: true });
        if (this.state.isDisabled) {
            this.setState({ buttonText: "Message Received" });
            return;
        }
        if (this.state.message === "") {
            this.setState({ messageError: true });
        } else {
            this.setState({ messageError: false });
        }
        if (!validateEmail(this.state.email)) {
            this.setState({ emailError: true });
        } else {
            this.setState({ emailError: false });
        }
        if (this.isValidContactMessage()) {
            this.setState({ isDisabled: true, buttonText: "Sending Message..." });
            console.log(this.state);
            axios
                .post(BASE_URL + CONTACT_MESSAGE + CREATE, {
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message,
                })
                .then((res) => {
                    this.setState({
                        isDisabled: true,
                        isSent: true,
                        error: false,
                        buttonText: "Message Received",
                    });
                    console.log(res.data);
                })
                .catch((err) => {
                    this.setState({
                        isDisabled: false,
                        error: true,
                        buttonText: "Send Message",
                    });
                    console.log(err);
                });
        }
    }

    isValidContactMessage() {
        if (!validateEmail(this.state.email)) {
            return false;
        }
        if (this.state.message === "") {
            return false;
        }
        return true;
    }

    render() {
        // const { store } = this.props;
        return (
            <div>
                {/*======= Contact Section =======*/}
                <section id="contact" className="contact">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>
                            Like what you see? Share the love with our team
                            <br></br>
                            We value all feedback, positive and negative.
                            Let us know how we can improve...
                        </p>
                    </div>


                    <div className="contact-form">
                        {!this.state.isSent && (
                            <Form noValidate validated={this.state.validated}>


                                <Form.Group controlId="formGridName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        onChange={this.handleNameChange}
                                        className="php-email-form"
                                        size="sm" />
                                </Form.Group>

                                <Form.Group controlId="formGridEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        required
                                        onChange={this.handleEmailChange}
                                        className="php-email-form"
                                        size="sm" />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email
                                    </Form.Control.Feedback>
                                </Form.Group>




                                <Form.Group controlId="formGridSubject">
                                    <Form.Control
                                        type="text"
                                        placeholder="Subject"
                                        onChange={this.handleSubjectChange}
                                        className="php-email-form"
                                        size="sm" />
                                </Form.Group>



                                <Form.Group controlId="formGridMessage">
                                    <Form.Control
                                        placeholder="Message..."
                                        as="textarea" rows={3}
                                        required
                                        onChange={this.handleMessageChange}
                                        className="php-email-form"
                                        size="sm" />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a message
                                    </Form.Control.Feedback>
                                </Form.Group>


                                {this.state.error && (
                                    <LargeAlert variant="danger" message="Some Error Ocurred" />
                                )}

                            </Form>

                        )}
                        {this.state.isSent && (
                            <div>
                                <div className="php-email-form-success">
                                    <FaCheckCircle />
                                </div>
                                    <LargeAlert
                                        variant="success"
                                        message="Your message has been sent. Thank you!"
                                    />
                            </div>
                        )}

                        <div className="text-center my-3">
                            <Button
                                variant="danger"
                                onClick={this.handleSubmit}
                            >
                                {this.state.buttonText}
                            </Button>
                        </div>
                    </div>

                </section>
                {/*End Contact Section */}
            </div>

        );
    }
}

export default ContactSection;
