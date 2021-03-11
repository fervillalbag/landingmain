
import Image from '../atoms/Image'

export default function Social() {
  return (
    <div>
      <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
        <Image src="icon-facebook.svg" alt="Facebook icon" />
      </a>
      <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
        <Image src="icon-youtube.svg" alt="Youtube icon" />
      </a>
      <a href="https://twitter.com/home" rel="noreferrer" target="_blank">
        <Image src="icon-twitter.svg" alt="Twitter icon" />
      </a>
      <a href="https://www.pinterest.com/" rel="noreferrer" target="_blank">
        <Image src="icon-pinterest.svg" alt="Pinterest icon" />
      </a>
      <a href="https://instagram.com/" rel="noreferrer" target="_blank">
        <Image src="icon-instagram.svg" alt="Instagram icon" />
      </a>

      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(5, 3rem);
        }
      `}</style>
    </div>
  )
}
