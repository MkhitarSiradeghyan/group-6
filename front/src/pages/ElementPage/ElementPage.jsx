import React from "react";
import s from "./ElementPage.module.sass";
import Container from "../../components/Container/Container";
import { useParams } from "react-router";
import getFullElectronConfiguration from "../../utils/el_config";
import getShellDistribution from "../../utils/orbitals";
const ElementPage = () => {
  const { number } = useParams();
  return (
    <div className={s.main}>
      <Container>
        <div className={s.wrap}>
          <div className={s.atom}>
            {getShellDistribution(number)}
            {getFullElectronConfiguration(number)}
          </div>
          <div className={s.properties}></div>
          <p className={s.desc}></p>
        </div>
      </Container>
    </div>
  );
};

export default ElementPage;
