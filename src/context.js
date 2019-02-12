import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {

  state = {
    theme: 'monokai',
    mode: 'python',
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    fontSize: 22,
    showGutter: true,
    showPrintMargin: true,
    highlightActiveLine: true,
    enableSnippets: true,
    showLineNumbers: true,
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }

}

export const Consumer = Context.Consumer;