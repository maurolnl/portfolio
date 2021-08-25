import React from 'react'
import global_styles from "../../styles/Home.module.css";

const LinkStyled = ({text, link}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${global_styles.link} `}
    >{text}</a>
  )
}

export default LinkStyled
