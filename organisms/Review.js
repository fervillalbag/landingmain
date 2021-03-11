
import Title from '../atoms/Title'
import CardReview from '../molecules/CardReview'

export default function Review() {
  return (
    <div>
      <Title>What they’ve said</Title>
      <main>
        <CardReview
          image="avatar-anisha.png"
          name="Anisha Li"
          message="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
        />
        <CardReview
          image="avatar-ali.png"
          name="Ali Bravo"
          message="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
        />
        <CardReview
          image="avatar-richard.png"
          name="Richard Watts"
          message="“Manage allows us to provide structure and process. It keeps us organized
  and focused. I can’t stop recommending them to everyone I talk to!”"
        />
      </main>

      <style jsx>{`
        div {
          max-width: 1200px;
          margin: 0 auto;
          width: 90%;
          text-align: center;
          padding: 4rem 0;
        }

        main {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 4rem;
          padding: 6rem 0;
        }

        @media screen and (max-width: 890px) {
          main {
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 4rem;
          }
        }

        @media screen and (max-width: 576px) {
          main {
            grid-template-columns: 1fr;
            grid-row-gap: 4rem;
          }
        }
      `}</style>
    </div>
  )
}
