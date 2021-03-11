
import Button from '../atoms/Button'
import Title from '../atoms/Title'
import { colors } from '../settings/colors'

export default function Docs() {
  return (
    <div>
      <main>
        <Title color="light">Simplify how your team works today.</Title>
        <aside>
          <Button color="light">Get Started</Button>
        </aside>
      </main>

      <style jsx>{`
        div {
          background-color: ${colors.BrightRed};
          padding: 3rem 0;
        }

        main {
          max-width: 1100px;
          width: 90%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          align-items: center;
        }

        aside {
          justify-self: end;
        }

        @media screen and (max-width: 768px) {
          main {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-width: 576px) {
          main {
            grid-template-columns: 1fr;
            grid-row-gap: 2rem;
            text-align: center;
          }

          aside {
            justify-self: center;
          }
        }
      `}</style>
    </div>
  )
}
