import React from 'react'
import s from "./Input.module.sass"

const Input = ({type="text", placeholder, name, error}) => {
  return (
    <div className={s.input}>
        <input type={type} name={name} placeholder={placeholder} />
        
        {
           <p className={s.error}>gwegwegwegewg</p>
        }
    </div>
  )
}

export default Input