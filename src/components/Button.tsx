import React from 'react'

type Props = {
  onClick: (text: string) => void
}
const Button = ({ onClick }: Props) => {
  return (
    <button onClick={() => onClick("passing a function as a prop!")}> button component </button>
  )
}

export default Button