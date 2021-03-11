
import Description from "../atoms/Description"
import Image from "../atoms/Image"
import Subtitle from "../atoms/Subtitle"

export default function CardReview({ image, name, message }) {
  return (
    <div>
      <Image src={image} alt={name} />
      <Subtitle margin="0">{name}</Subtitle>
      <Description margin="0">{message}</Description>

      <style jsx>{`
        div {
          display: grid;
          justify-items: center;
          grid-row-gap: 1.35rem;
        }  
      `}</style>
    </div>
  )
}
