import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import LoginForm from '../../components/LoginForm';
import {authentication} from "./../../actions/authentication";
import {notification} from "./../../constants/notification";



class LoginContainer extends Component {
    
    handleBack = () => {
        this.props.history.goBack();
    };
    
    handleOnSubmitSuccess = () => {
        notification( 'success', 'Bienvenido' ).show();
        this.props.history.push("/");
    }

    handleOnSubmitFail = (e) => {
        notification( 'error', e ).show();
    }

    handleSubmit = (values) => {
        return this.props.authentication(values).then( r => {
        }).catch( e => {
            throw new SubmissionError(e);
        });
    }
    
    renderBody = () => (
        <LoginForm 
            onBack={this.handleBack} 
            onSubmitSuccess={this.handleOnSubmitSuccess} 
            onSubmit={this.handleSubmit} 
            onSubmitFail={this.handleOnSubmitFail} />
    );

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                    <Card.Title>Iniciar sesion</Card.Title>
                        {this.renderBody()}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default withRouter(connect(null,{ authentication }) (LoginContainer));