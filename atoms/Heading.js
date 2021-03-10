
import { Fragment } from 'react'
import { colors } from '../utils/colors'

export default function Heading({ children }) {
  return (
    <Fragment>
      <h1>{children}</h1>

      <style jsx>{`
        h1 {
          font-size: 5.6rem;          
          font-weight: 700;
          color: ${colors.DarkBlue};
        }  
      `}</style>
    </Fragment>
  )
}
