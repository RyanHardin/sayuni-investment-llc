import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Contact.css'

function Contact() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" size='lg' placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="Email" size="lg" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control size="lg" placeholder="Message" as="textarea" rows={10} />
            </Form.Group>
            <Button variant="custom" size="lg" type="submit">
                Send
            </Button>
        </Form>
    );
}

export default Contact