import React from 'react'
import { useTranslation } from 'react-i18next'
import LinkStyled from "../LinkStyled/LinkStyled";

const VisitCodeMsg = ({isFullMsg, linkRepo, linkWeb}) => {
  const { t } = useTranslation('projects')
  return (
    <>
      {
        isFullMsg ?  
          <>
            {t('project-1front-end')}
            <LinkStyled text={t('project-site')} link={linkWeb}/>
            {t('project-1front-end-1')} 
            <LinkStyled text={t('project-here')} link={linkRepo}/>
          </>
        : <>
          {t('project-end-msg')} 
          <LinkStyled text={t('project-here')} link={linkRepo}/>
        </> 
      }
    </>
  )
}

export default VisitCodeMsg
