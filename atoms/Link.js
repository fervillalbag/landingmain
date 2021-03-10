
import Link from 'next/link'
import React, { Fragment } from 'react'
import { colors } from '../utils/colors'

export default function NavLink({ children, href, color, align }) {

  console.log(align)

  return (
    <Fragment>
      <Link href={href}>
        <a>{children}</a>
      </Link>

      <style jsx>{`
        a {
          color: ${color === 'light'
          ? colors.VaryLightGray
          : colors.DarkBlue};
          text-decoration: none;
          display: block;
          font-size: 1.575rem;
          font-weight: 500;
          margin-right: ${align === 'horizontal'
          ? '2.5rem' : '0'};
          margin-bottom: ${align === 'vertical'
          ? '1.75rem' : '0'}
        }

        a:last-of-type {
          margin-right: 0;
        }
      `}</style>
    </Fragment>
  )
}
