import React from 'react'
import s from './Hero.module.sass'
import Container from './../Container/Container';
import moto from '@/assets/img/moto.png'
import wheel from '@/assets/img/wheel.png'

const Hero = () => {
  return (
    <div className={s.hero}>
      <Container>
        <div className={s.wrap}>
          <h1 className={s.title}>Yamaha YZF R3</h1>
          <div className={s.img}>
            <img src={moto} alt="Yamaha" />
            <img className={s.wheel} src={wheel} alt="" />
            <img className={s.wheel} src={wheel} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero