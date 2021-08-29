import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercase pt-5">
                        <h1 className="display-3">404 error</h1>
                        <h3 className="mb-5">Page not found</h3>
                        <p>Tech requested URL &nbsp;
                            <span className="text-danger">{this.props.location.pathname}</span>{""}
                            &nbsp; was not found
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
