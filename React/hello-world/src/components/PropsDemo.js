import React from 'react'

export function PropsDemo(props) {
  console.log(props)
  return (
    <div>
      <h1>hello, {props.name}</h1>
    </div>
  )
}
