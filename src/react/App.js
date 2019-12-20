import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamCreate from "./layout/StreamCreate";
import StreamDelete from "./layout/StreamDelete";
import StreamEdit from "./layout/StreamEdit";
import StreamList from "./layout/StreamList";
import StreamShow from "./layout/StreamShow";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </Router>
      </div>
    );
  }
}

export default App;
