import React from 'react'
import { useTranslation } from 'react-i18next'
import LinkStyled from "../LinkStyled/LinkStyled";

const VisitCodeMsg = () => {
  const { t } = useTranslation('projects')
  return (
    <>
      {t('project-1front-end')}
      <LinkStyled text={t('project-site')} link="https://covid.maurolquiroga.site/"/>
      {t('project-1front-end-1')} 
      <LinkStyled text={t('project-here')} link="https://github.com/maurolnl/corona-tracker"/>
    </>
  )
}

export default VisitCodeMsg
