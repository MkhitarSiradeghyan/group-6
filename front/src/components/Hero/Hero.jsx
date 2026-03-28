import React from "react";
import s from "./Hero.module.sass";
import Container from "./../Container/Container";
import hero from "@/assets/img/hero.jpg";

const Hero = () => {
  return (
    <section className={s.hero} style={{backgroundImage: `url("${hero}")`}}>
      <Container>
        <div className={s.wrap}>
          <h1 className={s.title}>{import.meta.env.VITE_BRAND_NAME}</h1>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
