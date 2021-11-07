import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", message: "" };
    }

    render() {
        return (
            <div className="col">
                <h4 className="p-2 border-bottom">Login</h4>
                {/* Email starts */}
                <div className="ms-2 form-group form-row">
                    <label className="col-lg-4 form-label">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={(event) => {
                            this.setState({ email: event.target.value });
                        }}
                    />
                </div>
                {/* Email ends */}

                {/* password starts */}
                <div className="ms-2 form-group form-row">
                    <label className="col-lg-4 form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value });
                        }}
                    />
                </div>
                <div className="ms-2 mt-3 text-end">
                    <span className="me-2">{this.state.message}</span>
                    <button className="btn btn-primary" onClick={this.onLoginClick}>
                        Login
                    </button>
                </div>
            </div>
        );
    }
    // render ends here
    onLoginClick = async () => {
        var response = await fetch(
            `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
            { method: "GET" });
        var body = await response.json();

        if (body.length > 0) {
            this.setState({ message: <span className="text-success">Successfully Logged-in</span> });
        }
        else {
            this.setState({ message: <span className="text-danger">Invalid login, please try again</span> });
        }
    };
}

export default Login;