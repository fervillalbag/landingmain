
import React from 'react'

export default function LinkRel({ children, href = "/" }) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  )
}
