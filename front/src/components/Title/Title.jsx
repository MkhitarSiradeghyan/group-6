import React from 'react'
import s from './Title.module.sass'

const Title = ({children, level, styles}) => {
const Tag = `h${level}`
  return (
    <Tag className={s.title} style={styles}>{children}</Tag>
  )
}

export default Title