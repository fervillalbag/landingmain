
import { Fragment } from 'react'

export default function Image({ src, alt }) {
  return (
    <Fragment>
      <img src={src} alt={alt} />

      <style jsx>{`
        img {
          max-width: 100%;
          display: block;
        }
      `}</style>
    </Fragment>
  )
}
