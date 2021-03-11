
import { Fragment } from 'react'
import { colors } from '../settings/colors'

export default function ToggleBtn({ children, handleClick }) {

  return (
    <Fragment>
      <button onClick={handleClick}>
        {children}
      </button>

      <style jsx>{`
        button {
          background-color: ${colors.Transparent};

          outline: none;
          cursor: pointer;  
          border: none;
          font-weight: 700;
          padding: 1rem;
          font-size: 1.375rem;
          display: inline-block;
          text-decoration: none;
        }
      `}</style>
    </Fragment>
  )
}

