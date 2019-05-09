import React from 'react';
import PropTypes from 'prop-types';
import { Card, Nav, Button  } from 'react-bootstrap';
import './AppFrame.css';

const AppFrame = ({ header, body ,urlButton, contentButton }) => {
    return (
        <div className="app-frame">
            <Card>
                <Card.Header>
                    <Button variant='primary' className="float-right" href={urlButton}>{contentButton}</Button>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{header}</Card.Title>
                    {body}
                </Card.Body>
            </Card>
        </div>

    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;