# Welcome to CodeSpeak!

CodeSpeak is a web-based code editor that lets users code with the power of their voice. It's currently in an embryonic stage, but my intent is to grow the product into a mature, multi-language tool.

I'm a legally blind software engineer, and although CodeSpeak isn't ready for prime-time yet, my hope is that tools like this will aid developers from all walks of life.

# Getting Started

The live version of CodeSpeak can be found at https://codespeak.io - or you can clone this repository and run it locally.

CodeSpeak uses the Speech Recognition API, which currently works best in Google Chrome. Most other browsers don't support it at all, or support it only partially, but its adoption is growing, so CodeSpeak should work on other browsers soon.

To set up locally, simply clone this repository and run `npm install` from its root directory.

CodeSpeak also works best using HTTPS. This is enforced on codespeak.io, but if you decide to run it locally you may need to use the following command to make things work right:

- **Windows (cmd.exe)**: `set HTTPS=true&&npm start`
- **Windows (PowerShell)**: `($env:HTTPS = "true") -and (npm start)`
- **Mac/Linux**: `HTTPS=true npm start`

And, running locally, you'll still need to proceed past the usual "This site is unsafe" warnings.

# Commands

As I said, CodeSpeak is in its embryonic stage. Right now it only supports Python, and only has a limited number of commands:

- **"Hello world."**: enters the obligatory `print('Hello world')` command.
- **"Create function [function name]"**: Creates a `def function_name():` stub, with no arguments yet.
- **"Create variable [variable name]"**: Creates a variable with the specified name.
- **"Set value [variable value]""**: Sets the value of the created variable.
- **"Goodbye world."**: clears the editor window.

More commands and functionality coming soon, promise!

# Technology

CodeSpeak is built on the following technologies:

- **React**: This is overkill right now for what CodeSpeak is/does, but I hope it will give me room to scale the app as it grows.
- **React Ace**: A react implementation of the Ace editor, created by Cloud9. This is the WYSIWYG editor interface.
- **annyang**: This is the JavaScript speech engine that powers CodeSpeak.

# TODO

Everything! But here's a short list:

- **More commands**: Need to add enough Python commands to at least allow a user to write a very simple program entirely by voice.
- **UI/UX** I'm not great at UI, but I know it needs some work.
- **Save/share functionality**: Save code snippet to file, share as gist, etc.

More ambitious goals:

- **Other languages**: I'd like to have this working in other languages besides Python.
- **Integrated interpreter**: I'd like users to be able to actually run their code snippets in the browser.
- **Text-to-speech**: The flip side of speech-to-text, I'd like the editor to be able to give verbal output.

# Contributing

Yes please! This is my first open-source project, and, I'll be honest, I don't quite know what I'm doing. So help on any level would be greatly appreciated!
