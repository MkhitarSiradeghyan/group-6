import React from "react";
import s from "./ElementPage.module.sass";
import Container from "../../components/Container/Container";
import { useParams } from "react-router";
import getShellDistribution from "../../utils/orbitals";
import Title from "../../components/Title/Title";

const ElementPage = () => {
  const { number } = useParams();
  return (
    <div className={s.main}>
      <Container>
        <div className={s.wrap}>
          <div className={s.model}>
            <div className={s.atom}>
              {
                getShellDistribution(number).map((orbit, i) => (
                  <div className={s.orbit} style={{width: 100 + 40 * (i + 1) + "px", animationDuration: `${i + 1}s`}}>
                    {
                      new Array(orbit).fill(null).map((el, i) => (
                        <div className={s.electron} style={{"--i": i + 1, transform: `rotate(calc(360deg / ${orbit} * var(--i)))`}}>
                          <div className={s.el_in}></div>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
              <div className={s.proton}>{number}</div>
            </div>
          </div>
          <div className={s.properties}>
            <Title></Title>
          </div>
          <p className={s.desc}></p>
        </div>
      </Container>
    </div>
  );
};

export default ElementPage;
