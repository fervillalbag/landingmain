
import Image from '../atoms/Image'
import LinkRel from '../atoms/LinkRel'

export default function Social() {
  return (
    <div>
      <LinkRel href="https://www.facebook.com/">
        <Image src="icon-facebook.svg" alt="Facebook icon" />
      </LinkRel>
      <LinkRel href="https://www.youtube.com/">
        <Image src="icon-youtube.svg" alt="Youtube icon" />
      </LinkRel>
      <LinkRel href="https://twitter.com/home">
        <Image src="icon-twitter.svg" alt="Twitter icon" />
      </LinkRel>
      <LinkRel href="https://www.pinterest.com/">
        <Image src="icon-pinterest.svg" alt="Pinterest icon" />
      </LinkRel>
      <LinkRel href="https://instagram.com/">
        <Image src="icon-instagram.svg" alt="Instagram icon" />
      </LinkRel>

      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(5, 3rem);
        }
      `}</style>
    </div>
  )
}
