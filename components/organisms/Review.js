
import { useEffect, useState } from 'react'
import Title from '../atoms/Title'
import CardReview from '../molecules/CardReview'
import { DATA_REVIEW_JSON } from '../../utils/constants'

export default function Review() {

  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const data = await fetch(DATA_REVIEW_JSON)
      const result = await data.json()
      setData(result)
    })()
  }, [])

  if (!data) return null

  return (
    <div>
      <Title>What they’ve said</Title>
      <main>
        {data.map(dataItem => (
          <CardReview
            key={dataItem.id}
            image={dataItem.image}
            name={dataItem.name}
            message={dataItem.message}
          />
        ))}
      </main>

      <style jsx>{`
        div {
          max-width: 1100px;
          margin: 0 auto;
          width: 90%;
          text-align: center;
          padding: 6rem 0;
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
