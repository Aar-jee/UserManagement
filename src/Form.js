import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from 'material-ui/DatePicker';

export default class Form extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        email: "",
        emailError: "",
        mobile: "",
        mobileError: "",
        dob: "",
        dobError: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            mobileError: "",
            dobError: ""
        };

        if (this.state.firstName == "") {
            isError = true;
            errors.usernameError = "First Name is required";
        }

        if (this.state.lastName == "") {
            isError = true;
            errors.usernameError = "Last Name is required";
        }

        if (this.state.email.indexOf("@") === -1 || this.state.email == "") {
            isError = true;
            errors.emailError = "Requires valid email";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    render() {
        return (
            <form>
                <TextField
                    name="firstName"
                    floatingLabelText="First Name"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    errorText={this.state.firstNameError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="lastName"
                    floatingLabelText="Last Name"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                    errorText={this.state.lastNameError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="email"
                    floatingLabelText="Email ID"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    errorText={this.state.emailError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="mobile"
                    floatingLabelText="Mobile Number"
                    value={this.state.mobile}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                />
                <br />
                <DatePicker
                    name="dob"
                    floatingLabelText="Date Of Birth"
                    // value={this.state.dob}
                    // onChange={e => this.change(e)}
                    floatingLabelFixed
                />
                {/* <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary /> */}
            </form>
        );
    }
}
