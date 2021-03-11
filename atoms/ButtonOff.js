
import { Fragment } from 'react'
import { colors } from '../settings/colors'

export default function ButtonOff({ children }) {

  return (
    <Fragment>
      <span>
        {children}
      </span>

      <style jsx>{`
        span {
          background-color: ${colors.BrightRed};
          color: ${colors.VaryLightGray};

          font-weight: 700;
          padding: 1.1rem 2.5rem;
          font-size: 1.375rem;
          display: inline-block;
          border-radius: 2rem;
          text-decoration: none;
          
          webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.15);
          -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.15);
          box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.15);
        }
      `}</style>
    </Fragment>
  )
}

