
import { colors } from '../settings/colors'
import Image from '../atoms/Image'
import FooterNav from '../molecules/FooterNav'
import Social from '../molecules/Social'
import Form from '../molecules/Form'
import Copyright from '../molecules/Copyright'
import Link from '../atoms/Link'

export default function Footer() {
  return (
    <footer>
      <main>
        <div className="brand">
          <Link href="/">
            <Image src="logo_white.svg" />
          </Link>
        </div>
        <div className="social">
          <Social />
        </div>
        <div className="menu">
          <FooterNav />
        </div>
        <div className="form">
          <Form />
        </div>
        <div className="copy">
          <Copyright />
        </div>
      </main>

      <style jsx>{`
        footer {
          background-color: ${colors.VeryDarkBlue};
          padding: 5rem 0;
        }  
        
        main {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          grid-template-rows: repeat(2, auto);
          align-items: start;
        }

        .social {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
          align-self: end;
        }

        .menu {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }

        .copy {
          align-self: end;
        }

        @media screen and (max-width: 870px) {
          main {
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 3rem;
            grid-column-gap: 3rem;
          }

          .menu {
            grid-column: 2 / 4;
            grid-row: 1 / 2;
          }

          .form {
            grid-column: 2 / 4;
            grid-row: 2 / 3;
          }
        }

        @media screen and (max-width: 680px) {
          main {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(5, auto);
            justify-items: center;
            grid-row-gap: 4rem;
          }

          .menu {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
          }

          .social {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          .form {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
          }
        }
    `}</style>
    </footer>
  )
}
