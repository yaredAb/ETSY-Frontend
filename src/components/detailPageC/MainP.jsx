import React from 'react'
import LeftImages from './LeftImages'
import MainImg from './MainImg'
import SecondSection from './SecondSection'

const MainP = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-5">
      <LeftImages />
      <MainImg />
      <SecondSection />
    </div>
  )
}

export default MainP
