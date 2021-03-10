
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
      `}</style>
    </div>

  )
}
