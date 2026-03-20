import React from 'react'
import s from './Home.module.sass'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()

  return (
    <div>{t('app.home')}</div>
  )
}

export default Home