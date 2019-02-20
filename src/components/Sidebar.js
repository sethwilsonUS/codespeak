import React from 'react'

export default function Sidebar() {
  return (
    <div className='col-sm-3'>
      <h4>Commands to Try</h4>
      <ul>
        <li><strong>"Hello world!"</strong>: greet the world!</li>
        <li><strong>"Create function [function name]"</strong>: create a function [arguments coming soon]</li>
        <li><strong>"Create variable [variable name]"</strong>: create a variable</li>
        <li><strong>"Set value [value]"</strong>: set the value of a variable</li>
        <li><strong>"Goodbye world!"</strong>: start from scratch</li>
      </ul>
    </div>
  )
}
