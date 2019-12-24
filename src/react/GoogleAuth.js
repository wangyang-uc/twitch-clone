import React from "react";
import { connect } from "react-redux";
import { signInUser, signOutUser } from "../redux/ducks/auth";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "596311598286-j82s4ujmpvl7okb6ghuvrlnnq6icu8sk.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = status => {
    console.log("on Auth Change", status);
    if (status) {
      this.props.signInUser(this.auth.currentUser.get().getId());
    } else {
      this.props.signOutUser();
    }
  };
  handleSignIn = () => {
    this.auth.signIn();
  };
  handleSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.handleSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (!this.props.isSignedIn) {
      return (
        <button onClick={this.handleSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, {
  signInUser,
  signOutUser
})(GoogleAuth);
