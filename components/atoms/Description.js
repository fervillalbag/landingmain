
import { Fragment } from 'react'
import { colors } from '../../settings/colors'

export default function Description({ children, width, size = "1.75", margin = "2" }) {
  return (
    <Fragment>
      <p>{children}</p>

      <style jsx>{`
        p {
          width: ${width + `%`};
          font-weight: 400;
          color: ${colors.DarkGrayishBlue};
          font-size: ${size + `rem`};
          line-height: 1.7;
          margin: ${margin + `rem 0`};
        }

        @media screen and (max-width: 680px) {
          p {
            width: 100%;
          }
        }
      `}</style>
    </Fragment>
  )
}
