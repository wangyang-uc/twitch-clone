import React from "react";
import Modal from "../components/Modal";
import history from "../../history";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { readStream, deleteStream } from "../../redux/ducks/streams";
class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.readStream(this.props.match.params.id);
  }
  onDelete=(id)=> {
    this.props.deleteStream(id);
  }
  actionsBtn = (
    <>
      <button className="ui button negative" onClick={()=>this.onDelete(this.props.match.params.id)}>
        Delete
      </button>
      <Link to='/' className="ui button ">Cancel</Link>
    </>
  );
  render() {
    //Loading Text is none, else is title
    let temp = this.props.stream ? this.props.stream.title : "";
    return (
      <Modal
        title="Delete Stream"
        content={`Are you sure to delete this stream with title: ${temp}`}
        actions={this.actionsBtn}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { readStream, deleteStream })(
  StreamDelete
);
