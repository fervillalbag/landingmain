
import Link from 'next/link'
import { Fragment } from 'react'
import { colors } from '../utils/colors'

export default function Button({ children, href = "/", color }) {

  return (
    <Fragment>
      <Link href={href}>
        <a>{children}</a>
      </Link>

      <style jsx>{`
        a {
          background-color: 
          ${color === 'white'
          ? colors.VaryLightGray
          : colors.BrightRed};
          
          color: ${color === 'light'
          ? colors.BrightRed
          : colors.VaryLightGray};

          font-weight: 500;
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

