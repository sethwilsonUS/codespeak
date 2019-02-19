import React from 'react'

export default function Sidebar() {
  return (
    <div className='col-sm-3'>
      <h4>Commands to Try</h4>
      <ul>
        <li><strong>"Hello world!"</strong>: greet the world!</li>
        <li><strong>"Create variable [variable name]"</strong>: create a variable</li>
        <li><strong>"Goodbye world!"</strong>: start from scratch.</li>
      </ul>
    </div>
  )
}
