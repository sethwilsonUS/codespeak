const python = editor => {
  const defaultValue = '# lets do some coding!\n\n'
  return {
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
  }
}

export default python;