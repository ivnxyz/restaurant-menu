'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

type CarouselProps = {
  images: string[]
  name: string
}

export const Carousel = ({ images, name }: CarouselProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>()
  return (
    <div ref={ref} className="keen-slider">
      {images.map((image) => (
        <div className="keen-slider__slide" key={image}>
          <img src={image} className="object-cover h-64 md:h-72 w-full" />
        </div>
      ))}
    </div>
  )
}