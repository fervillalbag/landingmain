
import Button from '../atoms/Button'
import Brand from '../molecules/Brand'
import HeaderNav from '../molecules/HeaderNav'

export default function Header() {
  return (
    <nav>
      <div>
        <Brand
          href={`/`}
          src={`logo.svg`}
          alt={`Logo de la Empresa`}
        />
        <main>
          <HeaderNav />
        </main>
        <aside>
          <Button>Get Started</Button>
        </aside>
      </div>

      <style jsx>{`
        nav {
          height: 10rem;
        }

        div {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        @media screen and (max-width: 768px) {
          aside {
            display: none;
          }
        }

        @media screen and (max-width: 680px) {
          main {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}
