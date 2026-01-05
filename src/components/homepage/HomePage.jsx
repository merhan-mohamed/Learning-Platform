import React from 'react'
import Hero from '../Hero'
import Partners from '../Partners'
import VideoSection from '../VideoSection'
import Benefits from '../Benefits'
import Courses from '../Courses'
import Testimonials from '../Testimonials'
import Pricing from '../Pricing'
import FAQ from '../FAQ'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Partners />
      <VideoSection />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <FAQ />

    </div>
  )
}

export default HomePage