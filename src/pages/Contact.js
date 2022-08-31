import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser'
import './Contact.css'
require('dotenv').config()

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7oz1xrf', 'template_e9y2bzs', form.current, 'RJa_rXlJkZng5ibKs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <Form ref={form} onSubmit={sendEmail}>
            <Form.Label size="lg" style={{ paddingBottom: "25px" }}>Find support that works for you</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control name="name" type="name" size='lg' required placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name="email" type="Email" size="lg" required placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control name="message" size="lg" placeholder="Message" required as="textarea" rows={10} />
            </Form.Group>
            <Button variant="custom" size="lg" type="submit">
                Send
            </Button>
        </Form>
    );
}

export default Contact