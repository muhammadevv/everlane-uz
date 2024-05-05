import React from 'react'
import { Banner, Category, Clean, Discount, Info, Report, Sets, Talking } from './components'

function HomePage() {
  return (
    <>
      <Banner />
      <Category />
      <Discount />
      <Sets />
      <Clean />
      <Talking />
      <Report />
      <Info />
    </>
  )
}

export default HomePage