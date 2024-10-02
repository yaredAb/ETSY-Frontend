import React from 'react'
import Img from './Img'

const LeftImages = () => {
  return (
    <div class="hidden md:flex flex-col gap-y-2 ">
        <Img path="img/img-1.jpg"/>
        <Img path="img/img-2.jpg"/>
        <Img path="img/img-3.jpg"/>
        <Img path="img/img-4.jpg"/>
        <Img path="img/img-5.jpg"/>
        <Img path="img/img-6.jpg"/>
    </div>
  )
}

export default LeftImages
