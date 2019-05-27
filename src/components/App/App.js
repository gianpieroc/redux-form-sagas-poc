import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Input from "../Input";
import { required, email, phone } from "../../forms/validators";
import { submitForm } from "../../redux/actions";

let Home = ({
  handleSubmit,
  invalid,
  submitting,
  submitForm,
  submitSucceeded,
  error,
  ...props,
}) => {
  console.log(submitSucceeded, submitting, props,error)
  return (
    <Fragment>
      <form className="form-submission" onSubmit={handleSubmit(submitForm)}>
        <h1> Form Example </h1>
        <Field
          validate={required}
          label="First Name"
          name="firstName"
          component={Input}
          type="text"
        />
        <Field
          label="Last Name"
          name="lastName"
          component={Input}
          type="text"
        />
        <Field
          validate={[required, email]}
          label="Email"
          name="email"
          component={Input}
          type="email"
        />
        <Field
          validate={[required, phone]}
          label="Phone"
          name="phone"
          component={Input}
          type="text"
        />
        <button type="submit" disabled={invalid || submitting}>
          {submitting ? "Loading..." : "Submit"}
        </button>
        {submitSucceeded && "Thank you..."}
        {error && error}
      </form>
    </Fragment>
  );
};

Home = reduxForm({
  form: "user"
})(Home);

const mapStateToProps = state => ({
  submitSucceeded: state.form && state.form.user && state.form.user.submitSucceeded
});

const mapDispatchToProps = dispatch => ({
  submitForm: values => dispatch(submitForm(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
