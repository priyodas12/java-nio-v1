import React from 'react'

export function Jsxelement(props) {

  return (
    //<h1>Hi, I am JSX element</h1>
    React.createElement('div', null, React.createElement('h1', null, 'Hi, I am JSX element'))
  )
}

