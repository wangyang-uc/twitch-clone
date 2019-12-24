import React from "react";
import { connect } from "react-redux";
import { readStreams } from "../../redux/ducks/streams";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.readStreams();
  }
  renderStream = stream => {
    // console.log("renderStream", stream);
    return (
      <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={`/streams/${stream.id}`} className="header" >
          {stream.title}</Link>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    );
  };
  renderAdmin(stream) {
    if (StereoPannerNode.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
          <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
        </div>
      );
    }
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign:'right'}}>
          <Link to="/streams/new" className="ui button primary">Create Stream</Link>
        </div>
      );
    }
  }
  render() {
    let keyArray = Object.keys(this.props.streams);
    // console.log('streams',this.props.streams);
    // console.log('keyArray',keyArray)
    return (
      <>
        <h2>Streams</h2>
        <div className="ui celled list">
          {keyArray.map(key => this.renderStream(this.props.streams[key]))}
        </div>
        {this.renderCreate()}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    streams: state.streams,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(mapStateToProps, { readStreams })(StreamList);
