import React, {Component} from 'react';
import axios from 'axios';
import './invite-form.scss';

const FORM_STATUS = {
    NEW: 0,
    VALID: 1,
    INVALID: 2
};

export default class InviteForm extends Component {

    state = {
        formStatus: FORM_STATUS.NEW,
        isProcessing: false,
        errorMessage: null
    };

    setProcessingStatus = (isProcessing) => {
        this.setState({isProcessing});
    };

    setValidationResult = (formStatus) => {
        this.setState({formStatus});
        this.setProcessingStatus(false);
    }

    handleOK = (event) => {
        console.log(event);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setProcessingStatus(true);
        const {name, email, confirmEmail} = this;
        console.log(name.value, email.value, confirmEmail.value);
        axios.post('/prod/fake-auth', {name: name.value, email: email.value}).then(() => {
            this.setValidationResult(FORM_STATUS.VALID);
        }).catch((err) => {
            this.setValidationResult(FORM_STATUS.INVALID);
            const {errorMessage} = err.response.data;
            this.setState({errorMessage});
            console.log(err);
        });
    }

    render () {
        const {formStatus, isProcessing, errorMessage} = this.state;
        return (
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        {
                            formStatus === FORM_STATUS.VALID ?
                                <div>
                                    <div className="my-3 py-2">
                                        <div className="d-flex justify-content-center">
                                            <h3 className="modal-title">All done!</h3>
                                        </div>
                                        <hr className="w-10 border-dark" />
                                    </div>
                                    <div className="mb-3 py-3">
                                        <h4 className="text-secondary">You will be the first to experience</h4>
                                        <h4 className="text-secondary">Broccoli & Co. when we launch</h4>
                                    </div>
                                    <button type="button" onClick={this.handleOK} className="btn btn-success btn-lg btn-block">OK</button>
                                </div>
                                :<div>
                                    <div className="my-3 py-2">
                                        <div className="d-flex justify-content-center">
                                            <h3 className="modal-title content-subject">Request an invite</h3>
                                        </div>
                                        <hr className="w-10 border-dark" />
                                    </div>
                                    <div className="mb-3 py-3">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <input type="text" className="form-control" ref={input => this.name = input} placeholder="Full name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" ref={input => this.email = input} placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" ref={input => this.confirmEmail = input} placeholder="Confirm email" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" onClick={this.handleSubmit} className="btn btn-primary">{isProcessing ? 'Sending, please wait...' : 'Send'}</button>
                                            </div>
                                            {
                                                formStatus === FORM_STATUS.INVALID ?
                                                    <div className="alert alert-danger d-flex justify-content-center mt-3" role="alert">
                                                        {errorMessage}
                                                    </div>
                                                    :
                                                    ''
                                            }
                                        </form>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
