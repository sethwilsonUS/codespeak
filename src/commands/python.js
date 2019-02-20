const python = editor => {
  const defaultValue = '# lets do some coding!\n\n';
  const makeSnakeCase = str => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return letter.toLowerCase();
    }).replace(/\s+/g, '_');
  };
  return {
    'hello world': () => {
      editor.insert('print("Hello, world!")');
      editor.insert('\n');
      editor.insert('\n');
    },
    'comment *comment': (comment) => {
      editor.insert(`# ${comment}\r\r`);
    },
    'create variable *var': variable => {
      editor.insert(`${makeSnakeCase(variable)} = `);
    },
    'create function *func': func => {
      editor.insert(`def ${makeSnakeCase(func)}():`);
      editor.insert('\n');
    },
    'set value *value': (value) => {
      if (!isNaN(value)) {
        editor.insert(`${value}`);
      } else if (value === 'true' | value === 'false') {
        const boolean = value.charAt(0).toUpperCase() + value.slice(1);
        editor.insert(`${boolean}`);
      } else {
        editor.insert(`'${value.replace('\'', '\\\'')}'`);
      }
      editor.insert('\n');
    },
    'goodbye world': () => {
      editor.setValue(defaultValue);
      editor.gotoLine(3);
    }
  }
}

export default python;