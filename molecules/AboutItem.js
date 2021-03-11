
import ButtonOff from "../atoms/ButtonOff"
import Description from "../atoms/Description"
import Subtitle from "../atoms/Subtitle"

export default function AboutItem({ number, subtitle, description }) {
  return (
    <div>
      <aside>
        <ButtonOff>{number}</ButtonOff>
      </aside>
      <nav>
        <Subtitle>{subtitle}</Subtitle>
      </nav>
      <main>
        <Description margin="1">{description}</Description>
      </main>

      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: 8rem 1fr;
          grid-template-rows: repeat(2, auto);
          align-items: center;
        }

        aside {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }

        nav {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }

        main {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
        }

        @media screen and (max-width: 768px) {
          main {
            grid-column: 1 / 3;
          }
        }
      `}</style>
    </div>
  )
}
