
import Link from '../atoms/Link'

export default function FooterNav() {
  return (
    <article>
      <div>
        <Link align="vertical" color="light" href={`/`}>Home</Link>
        <Link align="vertical" color="light" href={`/`}>Pricing</Link>
        <Link align="vertical" color="light" href={`/`}>Products</Link>
        <Link color="light" href={`/`}>About Us</Link>
      </div>
      <div>
        <Link align="vertical" color="light" href={`/`}>Careers</Link>
        <Link align="vertical" color="light" href={`/`}>Community</Link>
        <Link color="light" href={`/`}>Privacy Policy</Link>
      </div>

      <style jsx>{`
        article {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 680px) {
          article {
            grid-column-gap: 3rem; 
          }
        }
      `}</style>
    </article>
  )
}
