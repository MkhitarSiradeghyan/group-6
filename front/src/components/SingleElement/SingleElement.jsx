import React from "react";
import s from "./SingleElement.module.sass";
import { Link } from "react-router";

const SingleElement = ({ children, info }) => {
  return (
    <Link
      to={`/element/${info.number}`}
      className={s.main}
      style={{
        gridArea: `${info.period + 1} / ${info.group + 1} / ${info.period + 2} / ${info.group + 2}`,
      }}
    >
      <div className={s.number}>{info.atomic_number}</div>
      {children}
    </Link>
  );
};

export default SingleElement;
