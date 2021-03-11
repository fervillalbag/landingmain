
import { Fragment } from 'react'
import { colors } from '../settings/colors'

export default function Heading({ children }) {
  return (
    <Fragment>
      <h1>{children}</h1>

      <style jsx>{`
        h1 {
          font-size: 5.6rem;          
          font-weight: 700;
          color: ${colors.DarkBlue};
          margin: 1rem 0;
        }

        @media screen and (max-width: 680px) {
          h1 {
            font-size: 3.8rem;
          }
        }
      `}</style>
    </Fragment>
  )
}
