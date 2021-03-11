
import { Fragment } from 'react'
import { colors } from '../settings/colors'

export default function Button({ children, color, handleSubmit }) {

  return (
    <Fragment>
      <button type="button" onClick={handleSubmit}>
        {children}
      </button>

      <style jsx>{`
        button {
          background-color: 
          ${color === 'light'
          ? colors.VaryLightGray
          : colors.BrightRed};
          
          color: ${color === 'light'
          ? colors.BrightRed
          : colors.VaryLightGray};

          border: none;
          cursor: pointer;
          outline: none;
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

