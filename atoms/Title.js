
import { Fragment } from 'react'
import { colors } from '../utils/colors'

export default function Title({ children }) {
  return (
    <Fragment>
      <h2>{children}</h2>

      <style jsx>{`
        h2 {
          font-size: 3.4rem;
          color: ${colors.DarkBlue};

        }    
      `}</style>
    </Fragment>
  )
}
