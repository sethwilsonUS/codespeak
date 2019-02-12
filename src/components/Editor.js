import React, { Component } from 'react';
import { Consumer } from '../context';
import AceEditor from 'react-ace';
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

const defaultValue = '# speak some commands!\n\n';

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
      const commands = {
        'hello world': () => {
          editor.insert('print("Hello, world!")');
          editor.insert('\n');
          editor.insert('\n');
        },
        'comment *comment': (comment) => {
          editor.insert(`# ${comment}\r\r`);
        },
        'create variable *var': (variable) => {
          editor.insert(`${variable} = `)
        },
        'goodbye world': () => {
          editor.setValue(defaultValue);
          editor.gotoLine(3);
        }
      };
      annyang.addCommands(commands);
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
            <div className="example">
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
