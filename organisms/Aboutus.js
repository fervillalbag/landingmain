
import Description from "../atoms/Description"
import Title from "../atoms/Title"
import AboutItem from "../molecules/AboutItem"

export default function Aboutus() {
  return (
    <section>

      <div>
        <Title>What’s different about Manage?</Title>
        <Description width={80}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
        </Description>
      </div>
      <aside>
        <AboutItem
          number="01"
          subtitle="Track company-wide progress"
          description="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the  level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        />
        <AboutItem
          number="02"
          subtitle="Advanced built-in reports"
          description="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        />
        <AboutItem
          number="03"
          subtitle="Everything you need in one place"
          description="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        />
      </aside>

      <style jsx>{`
        section {
          max-width: 1200px;
          margin: 0 auto;
          width: 90%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 6rem;
          padding: 4rem 0;
        }
        
        @media screen and (max-width: 950px) {
          section {
            grid-template-columns: 1fr;
            grid-row-gap: 3rem;
          }
        }
      `}</style>
    </section>
  )
}
