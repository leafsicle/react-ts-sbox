import React from "react"

type Props = {
  title: string,
  isActive?: boolean
}
const Head = ({ title = "Regular Milk", isActive = true }: Props) => {
  return (
    <header className="App-header">
      <h1>{title}</h1>
      {isActive && <h3>isActive is in fact Active</h3>}
    </header >
  )
}

export default Head