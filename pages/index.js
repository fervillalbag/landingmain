
// import Button from '../atoms/Button'
// import Description from '../atoms/Description'
// import Heading from '../atoms/Heading'
// import Image from '../atoms/Image'
// import Input from '../atoms/Input'
// import Link from '../atoms/Link'
// import Subtitle from '../atoms/Subtitle'
// import Title from '../atoms/Title'
// import SeoTemplate from '../components/SeoTemplate'
import Brand from '../molecules/Brand'
import HeaderNav from '../molecules/HeaderNav'

export default function Home() {
  return (
    <div>
      {/* <SeoTemplate />
      <Button href={`/`}>Get Started</Button>
      <Image src={`/vercel.svg`} alt={"Vercel Logo"} />
      <Link href={`/`}>Enlace</Link>
      <Heading>Hello World</Heading>
      <Description>Lorem ipsum dolor sit amet consectetur.</Description>
      <Title>Título del texto</Title>
      <Subtitle>Subtítulo</Subtitle>
      <Input placeholder="hola" /> */}
      <Brand href={`/`} src={`logo.svg`} alt={`Logo de la Empresa`} />
      <HeaderNav />

      <style jsx>{`
        div {
          background-color: hsl(0deg, 0%, 90%);
          padding: 3rem 0;
        }  
      `}</style>
    </div>
  )
}