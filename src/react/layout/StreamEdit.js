import React from "react";
import StreamForm from "../components/StreamForm";
import { connect } from "react-redux";
import { readStream, updateStream } from "../../redux/ducks/streams";
import _ from 'lodash'
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.readStream(this.props.match.params.id);
  }
  onSubmit = formValues => {
    // console.log(formValues);
    this.props.updateStream(this.props.match.params.id,formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream,'title','description')}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { readStream, updateStream })(
  StreamEdit
);
