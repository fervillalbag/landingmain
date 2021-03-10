
import React, { Fragment } from 'react'
import { colors } from '../utils/colors'

export default function Subtitle({ children }) {
  return (
    <Fragment>
      <h3>{children}</h3>

      <style jsx>{`
        h3 {
          font-size: 2.6rem;
          color: ${colors.DarkBlue};
        }    
      `}</style>
    </Fragment>
  )
}
