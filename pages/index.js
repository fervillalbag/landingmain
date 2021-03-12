
import { Fragment } from 'react'
import Header from '../components/organisms/Header'
import Hero from '../components/organisms/Hero'
import Aboutus from '../components/organisms/Aboutus'
import Review from '../components/organisms/Review'
import Docs from '../components/molecules/Docs'
import Footer from '../components/organisms/Footer'
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