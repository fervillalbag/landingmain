
import Link from '../atoms/Link'

export default function HeaderNav() {
  return (
    <div>
      <Link align="horizontal" href={`/`}>Pricing</Link>
      <Link align="horizontal" href={`/`}>Product</Link>
      <Link align="horizontal" href={`/`}>About Us</Link>
      <Link align="horizontal" href={`/`}>Careers</Link>
      <Link align="horizontal" href={`/`}>Community</Link>

      <style jsx>{`
        div {
          display: flex;
        }

        @media screen and (max-width: 680px) {
          div {
            width: 100%;
            flex-direction: column;
            align-items: center;
            row-gap: 2rem;
          }
        }
      `}</style>
    </div>

  )
}
