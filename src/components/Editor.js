import React, { Component } from 'react';
import { Consumer } from '../context';
import AceEditor from 'react-ace';
import python from '../commands/python'
import 'brace/mode/jsx';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import * as annyang from 'annyang';

const languages = [
  'javascript',
  'java',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'css'
];

const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
];

languages.forEach(lang => {
  require(`brace/mode/${lang}`);
  require(`brace/snippets/${lang}`);
});

themes.forEach(theme => {
  require(`brace/theme/${theme}`);
});

export default class Editor extends Component {

  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.state = {
      value: '# lets do some Python!\n\n'
    };
  }

  componentDidMount() {

    const editor = this.editorRef.current.editor;
    if (annyang) {
      annyang.addCommands(python(editor));
      annyang.start();
    } else {
      alert('Oops, looks like annyang no workie. Try again with Chrome.');
    }
  }

  onChange(newValue) {
    console.log('change', newValue);
    this.setState({
      value: newValue,
    });
  }

  onSelectionChange(newValue, event) {
    console.log('select-change', newValue);
    console.log('select-change-event', event);
  }

  onCursorChange(newValue, event) {
    console.log('cursor-change', newValue);
    console.log('cursor-change-event', event);
  }

  onValidate(annotations) {
    console.log('onValidate', annotations);
  }

  render() {
    return (
      <Consumer>
        {settings => {
          return (
            <div className="example col-sm-9">
              <AceEditor
                ref={this.editorRef}
                width={'100%'}
                height={'75vh'}
                mode={settings.mode}
                theme={settings.theme}
                name="blah2"
                onChange={this.onChange.bind(this)}
                onSelectionChange={this.onSelectionChange.bind(this)}
                onCursorChange={this.onCursorChange.bind(this)}
                onValidate={this.onValidate.bind(this)}
                value={this.state.value}
                fontSize={settings.fontSize}
                showPrintMargin={settings.showPrintMargin}
                showGutter={settings.showGutter}
                highlightActiveLine={settings.highlightActiveLine}
                setOptions={{
                  enableBasicAutocompletion: settings.enableBasicAutocompletion,
                  enableLiveAutocompletion: settings.enableLiveAutocompletion,
                  enableSnippets: settings.enableSnippets,
                  showLineNumbers: settings.showLineNumbers,
                  tabSize: (settings.mode === 'python') ? 4 : 2
                }}
              />
            </div>
          )
        }}
      </Consumer>
    )
  }
}
