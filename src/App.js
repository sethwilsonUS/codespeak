import React, { Component } from 'react';
import { Provider } from './context';
import Editor from './components/Editor';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <Provider>
      <div className="container-fluid p-5">
        <h1>CodeSpeak.io - Voice Programming on the Web</h1>
        <Editor />
      </div>
      </Provider>
    );
  }
}

export default App;