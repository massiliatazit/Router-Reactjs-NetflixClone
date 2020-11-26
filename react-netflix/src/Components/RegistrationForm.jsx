import React from "react";
import { Form, Button, Col } from "react-bootstrap";

class RegistrationForm extends React.Component {
  state = {
    form: {
      name: "",
      surname: "",
      email: "",
      password: "",
      yearB: 2000,
      address: "",
      city: "",
      zipcode: "",
    },

    fields: {},
    errors: {},
  };
  updateRegisterForm = (e) => {
    let form = { ...this.state.form };
    let currentId = e.currentTarget.id;
    form[currentId] = e.currentTarget.value;
    this.setState({ form: form });
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!this.name) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof this.name !== "undefined") {
      if (!this.name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof this.email !== "undefined") {
      let lastAtPos = this.email.lastIndexOf("@");
      let lastDotPos = this.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          this.email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          this.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  };

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    return (
      <div className="text-center">
        <Form
          onSubmit={this.handleSubmit}
          className=" formregister text-center border border-light p-5 m-5"
          action="#!"
        >
          <h5 className="card-header info-color white-text text-center py-4">
            <strong>Sign in</strong>
          </h5>
          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Name"
              minLength={2}
              id="name"
              value={this.state.name}
              onChange={this.updateRegisterForm}
              style={{
                // simple way to indicate field validation
                color: this.isValid ? "green" : "red",
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Label>SurName</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="SurName"
              id="surname"
              value={this.state.surname}
              onChange={this.updateRegisterForm}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mb-4">
            <Form.Label>Email address</Form.Label>

            <Form.Control
              required
              type="email"
              id="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.updateRegisterForm}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.updateRegisterForm}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Check
            required
            type="checkbox"
            className="my-1 mr-sm-2"
            id="customControlInline"
            label="Remember my preference"
            custom
          />
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="City"
                required
                type="invalid"
                id="city"
                value={this.state.city}
                onChange={this.updateRegisterForm}
              />
              <Form.Control.Feedback>
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                required
                minLength={5}
                maxLength={5}
                id="zipcode"
                value={this.state.zipcode}
                onChange={this.updateRegisterForm}
                minLength={5}
                maxLength={5}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default RegistrationForm;
