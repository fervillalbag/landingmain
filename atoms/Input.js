
import { Fragment } from 'react'

export default function Input({
  type = "text",
  id = "",
  name = "",
  placeholder = "",
  disabled = false
}) {
  return (
    <Fragment>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />

      <style jsx>{`
        input {
          border: none;
          outline: none;
          padding: 1.5rem 2rem;
          border-radius: 2rem;
          display: block;
          width: 100%;
          font-size: 1.375rem;
        }
      `}</style>
    </Fragment>
  )
}
