import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import {insertUser} from "./../../actions/user";
// import PropTypes from 'prop-types';
import UserForm from './../../components/UserForm';

class NewUserContainer extends Component {
    handleSubmit = values => {
        return this.props.insertUser(values).then( r => {
        }).catch( e => {
            throw new SubmissionError(e);
        });
    }
    
    handleBack = () => {
        this.props.history.goBack();
    };
    
    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <UserForm onSubmit={this.handleSubmit}
                onSubmitSuccess={this.handleOnSubmitSuccess}
                onBack={this.handleBack}/>
    };

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                        {this.renderBody()}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

// NewUserContainer.propTypes = {

// };

export default withRouter(connect(null,{ insertUser }) (NewUserContainer));