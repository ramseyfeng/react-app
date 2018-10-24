import React, {Component} from 'react';
import axios from 'axios';

const FORM_STATUS = {
    NEW: 0,
    VALID: 1,
    INVALID: 2
};

export default class InviteForm extends Component {

    constructor(props) {

        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOK = this.handleOK.bind(this);
        this.state = {
            formStatus: FORM_STATUS.NEW,
            isProcessing: false
        };
    }

    handleOK(event) {
        console.log(event);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({isProcessing: true});
        const {name, email, confirmEmail} = this;
        console.log(name.value, email.value, confirmEmail.value);
        axios.post('/prod/fake-auth', {name: name.value, email: email.value}).then(response => {
            this.setState({
                formStatus: FORM_STATUS.VALID
            });
            console.log(response);
        }).catch((err) => {
            this.setState({
                formStatus: FORM_STATUS.INVALID
            });
            console.log(err);
        });
        /*axios.post('/api/load-tests?TENANTID=stormui&projectId=1', {name: 'axios'}).then(response => {
            console.log(response);
        });*/
    }

    render () {
        const {formStatus, isProcessing} = this.state;
        return (
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        {
                            formStatus === FORM_STATUS.VALID ?
                                <div>
                                    <div className="d-flex justify-content-center my-3 py-2">
                                        <h3 className="modal-title">All done!</h3>
                                    </div>
                                    <hr className="w-10 border-dark" />
                                    <div className="mb-3">
                                        <h4 className="text-secondary">You will be the first to experience</h4>
                                        <h4 className="text-secondary">Broccoli & Co. when we launch</h4>
                                    </div>
                                    <button type="button" onClick={this.handleOK} className="btn btn-success btn-lg btn-block">OK</button>
                                </div>
                                :<div>
                                    <div className="d-flex justify-content-center my-3 py-2">
                                        <h3 className="modal-title">Request an invite</h3>
                                    </div>
                                    <hr className="w-10" />
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
                                                    Error message from server here.
                                                </div>
                                                :
                                                ''
                                        }
                                    </form>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
