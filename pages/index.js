
import { Fragment } from 'react'
import Header from '../organisms/Header'
import Hero from '../organisms/Hero'
import Aboutus from '../organisms/Aboutus'
import Review from '../organisms/Review'
import Docs from '../molecules/Docs'
import Footer from '../organisms/Footer'
import SeoTemplate from '../components/SeoTemplate'

export default function Home() {
  return (
    <Fragment>
      <SeoTemplate />
      <Header />
      <Hero />
      <Aboutus />
      <Review />
      <Docs />
      <Footer />
    </Fragment>
  )
}