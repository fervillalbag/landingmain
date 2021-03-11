
import Heading from "../atoms/Heading"
import Description from "../atoms/Description"
import Button from "../atoms/Button"
import Image from "../atoms/Image"

export default function Hero() {
  return (
    <section>
      <div>
        <Heading>Bring everyone together to build better products.</Heading>
        <Description width={`70`}>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</Description>
        <Button>Get Started</Button>
      </div>
      <div>
        <Image width="40rem" src="/illustration-intro.svg" />
      </div>
      <style jsx>{`
        section {
          max-width: 1100px;
          margin: 0 auto;
          width: 90%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 6rem 0;
        }

        div:nth-child(2) {
          display: grid;
          justify-items: end;
        }

        @media screen and (max-width: 768px) {
          section {
            grid-template-columns: 1fr;
          }

          div:nth-child(2) {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}
