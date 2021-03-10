
import { Fragment } from 'react'
import { colors } from '../utils/colors'

export default function Description({ children }) {
  return (
    <Fragment>
      <p>{children}</p>

      <style jsx>{`
        p {
          font-weight: 400;
          color: ${colors.DarkGrayishBlue};
          font-size: 1.375rem;
          margin: 1rem 0;
        }  
      `}</style>
    </Fragment>
  )
}
