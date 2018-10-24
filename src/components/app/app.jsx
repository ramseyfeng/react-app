import React, {Component} from 'react';
import InviteForm from '../invite-form/invite-form';

export default class App extends Component {

    render () {
        return (
            <div className="page">
                <div className="page-header navbar">
                    <div className="container-fluid px-5">
                        <div className="navbar-brand pl-5">BROCOLI CO</div>
                    </div>
                </div>
                <div className="page-content d-flex text-center">
                    <form className="form-signin">
                        <h1 className="h1 mb-3 font-weight-normal">A better way</h1>
                        <h1 className="h1 mb-3 font-weight-normal">to enjoy every day</h1>
                        <p>Be the first to know when we launch.</p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#invitationModal">
                            Request an invite
                        </button>
                    </form>
                </div>
                <div className="modal fade" id="invitationModal">
                    <InviteForm></InviteForm>
                </div>
                <div className="page-footer">
                    <div className="container-fluid p-3 text-center">
                        <p>Made with svg in Melboune</p>
                        <p>2016 Broccoli &amp; Co. All rights reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}