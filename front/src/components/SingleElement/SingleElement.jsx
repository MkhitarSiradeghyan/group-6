import React from 'react'
import s from "./SingleElement.module.sass"

const SingleElement = ({children, info}) => {
  return (
    <div className={s.main} style={{gridArea: `${info.period + 1} / ${info.group + 1} / ${info.period + 2} / ${info.group + 2}`}}>
        <div className={s.number}>{info.atomic_number}</div>
        {children}
        </div>
  )
}

export default SingleElement