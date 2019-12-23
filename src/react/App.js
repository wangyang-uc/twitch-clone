import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
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
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamShow} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
