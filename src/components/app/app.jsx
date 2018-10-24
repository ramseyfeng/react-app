import React, {Component} from 'react';
import InviteForm from '../invite-form/invite-form';
import 'bootstrap/scss/bootstrap.scss';
import './app.scss';
import 'jquery/dist/jquery.slim.min';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export default class App extends Component {

    render () {
        return (
            <div className="page">
                <div className="page-header navbar navbar-dark bg-primary">
                    <div className="container-fluid px-lg-5 px-md-3">
                        <div className="navbar-brand px-lg-5 px-md-3">BROCOLI CO</div>
                    </div>
                </div>
                <div className="page-content d-flex text-center">
                    <form className="form-signin">
                        <h2 className="h2 mb-3 font-weight-normal">A better way</h2>
                        <h2 className="h2 mb-3 font-weight-normal">to enjoy every day</h2>
                        <p className="text-secondary">Be the first to know when we launch.</p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#invitationModal">
                            Request an invite
                        </button>
                    </form>
                </div>
                <div className="modal fade" id="invitationModal">
                    <InviteForm/>
                </div>
                <div className="page-footer bg-secondary">
                    <div className="container-fluid p-3 text-center">
                        <p>Made with svg in Melboune</p>
                        <p>2016 Broccoli &amp; Co. All rights reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}