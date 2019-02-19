import React, { Component } from 'react';
import { Provider } from './context';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';

class App extends Component {

  render() {
    return (
      <Provider>
        <div className="container-fluid p-5">
          <h1>CodeSpeak.io - Voice Programming on the Web</h1>
          <div className="row pt-3">
            <Sidebar />
            <Editor />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;