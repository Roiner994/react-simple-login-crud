import React from 'react';
import {Form,Col,Row} from "react-bootstrap";

const MyField = ({input, meta, type, label, name, placeholder}) => {
    return (
        <div>
            <Form.Group as={Row} controlId={input.name} className="has-error has-feedback">
            <Form.Label column sm="2">{label}</Form.Label>
            <Col sm="10">
                <Form.Control {...input} type={!type ? "text": type} placeholder={placeholder} isInvalid={meta.touched && meta.error} />
                {
                    meta.touched && meta.error && <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
                }
            </Col>
            </Form.Group>
        </div>
    );
};


export default MyField;