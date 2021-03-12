
import { useEffect, useState } from "react"
import Description from "../atoms/Description"
import Title from "../atoms/Title"
import AboutItem from "../molecules/AboutItem"
import { DATA_ABOUT_JSON } from '../../utils/constants'

export default function Aboutus() {

  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const data = await fetch(DATA_ABOUT_JSON)
      const result = await data.json()
      setData(result)
    })()
  }, [])

  if (!data) return null

  return (
    <section>

      <div>
        <Title>What’s different about Manage?</Title>
        <Description width={80}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
        </Description>
      </div>
      <aside>
        {data.map(dataItem => (
          <AboutItem
            key={dataItem.id}
            number={dataItem.number}
            subtitle={dataItem.subtitle}
            description={dataItem.description}
          />
        ))}
      </aside>

      <style jsx>{`
        section {
          max-width: 1100px;
          margin: 0 auto;
          width: 90%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 6rem;
          padding: 6rem 0;
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
