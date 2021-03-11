
import Link from 'next/link'
import React, { Fragment } from 'react'
import { colors } from '../settings/colors'

export default function NavLink({ children, href, color, align }) {
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
          ? '2rem' : '0'}
        }
      `}</style>
    </Fragment>
  )
}
