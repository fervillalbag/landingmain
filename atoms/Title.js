
import { Fragment } from 'react'
import { colors } from '../settings/colors'

export default function Title({ children, color }) {
  return (
    <Fragment>
      <h2>{children}</h2>

      <style jsx>{`
        h2 {
          font-size: 3.8rem;
          color: ${color === 'light'
          ? colors.VaryLightGray
          : colors.DarkBlue};
          margin: 1rem 0;
          line-height: 1.3;
        }    
      `}</style>
    </Fragment>
  )
}
