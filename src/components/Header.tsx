import React from "react"
//title
// isActive
// 

type Props = {
  title: string,
  isActive: boolean
}
const Head = ({ title, isActive }: Props) => {
  return (
    <header className="App-header">
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </header >
  )
}

export default Head
