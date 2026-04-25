import React from "react";
import s from "./SingleElement.module.sass";
import { Link } from "react-router";

const SingleElement = ({ children, info, style }) => {

  return (
    <Link
      to={`/element/${info.number}`}
      className={s.main}
      style={style}
      
    >
      <div className={s.number}>{info.atomic_number}</div>
      {children}
    </Link>
  );
};

export default SingleElement;
