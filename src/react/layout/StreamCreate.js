import React from "react";
import StreamForm from "../components/StreamForm";
import { connect } from "react-redux";
import { createStream } from "../../redux/ducks/streams";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    // console.log(formValues);
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Creat a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
