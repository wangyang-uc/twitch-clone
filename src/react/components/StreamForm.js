import React from "react";
import { Field, reduxForm } from "redux-form";


class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      console.log(error);
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    //   console.log(meta)
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = formValue => {
  const error = {};
  if (!formValue.title) {
    error.title = "Title is needed";
  }
  if (!formValue.description) {
    error.description = "Description is needed";
  }
  return error;
};

const formWrapped = reduxForm({
  form: "streamForm",
  validate: validate
})(StreamForm);
export default formWrapped;
