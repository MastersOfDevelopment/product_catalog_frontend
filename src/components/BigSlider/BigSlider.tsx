import React, { useState } from 'react'
import Slider from 'react-slick'
import cn from 'classnames'
import styles from './BigSlider.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import leftButton from '../../assets/icons/left-button.svg'
import buttonRight from '../../assets/icons/right-button.svg'

export const BigSlider: React.FC = () => {
  const slider = React.useRef<Slider>(null)

  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    speed: 400,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: number, next: number) => {
      setCurrentSlide(next)
    },
    appendDots: (dots: number[]) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className={styles.dots_list}>
        {
          <div
            className={cn(styles.dots, {
              [styles.dots_active]: i === currentSlide,
            })}
          ></div>
        }
      </div>
    ),
  }

  const nextSlide = () => {
    slider?.current?.slickNext()
  }

  const prevSlide = () => {
    slider?.current?.slickPrev()
  }

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={prevSlide}>
        <img src={leftButton} alt="prev slide" className={styles.button_image} />
      </div>

      <div className={styles.content}>
        <Slider ref={slider} {...settings}>
          <div className={styles.first_slide}></div>
          <div className={styles.second_slide}></div>
          <div className={styles.third_slide}></div>
        </Slider>
      </div>

      <div className={styles.button} onClick={nextSlide}>
        <img src={buttonRight} alt="next slide" className={styles.button_image} />
      </div>
    </div>
  )
}
