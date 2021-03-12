
import { Fragment } from 'react'
import { colors } from '../../settings/colors'

export default function Subtitle({ children, margin = "1" }) {
  return (
    <Fragment>
      <h3>{children}</h3>

      <style jsx>{`
        h3 {
          font-size: 2.6rem;
          color: ${colors.DarkBlue};
          margin: ${margin + `rem 0`};
        }

        @media screen and (max-width: 768px) {
          h3 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </Fragment>
  )
}
