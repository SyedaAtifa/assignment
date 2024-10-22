import React from 'react'
import style from "./hero.module.css"
import { faCircleArrowUp,faGraduationCap,faPen,faLightbulb,faFileLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'

const hero = () => {
  return (
    <div>
      <h1 className={style.h1}>What can I help with?</h1>
      <div className={style.txt}>
       <p>
        <textarea className={style.par} placeholder='Message ChatGPT' id="message"  ></textarea>
       </p>
       <div className={style.icon}>
          <FontAwesomeIcon icon={faCircleArrowUp} />
       </div>
      </div>
      
      <div>
        <ul className={style.list}>
          <button className={style.btn}><FontAwesomeIcon className={style.a} icon={faGraduationCap} /><span className={style.act}>Get advice</span></button>
          <button className={style.btn}><FontAwesomeIcon className={style.b} icon={faPen} />< span className={style.act} >Help me write </span></button>
          <button className={style.btn}><FontAwesomeIcon className={style.c} icon={faLightbulb} /><span className={style.act} >Brainstorm</span></button>
          <button className={style.btn}><FontAwesomeIcon className={style.d} icon={faFileLines} /><span className={style.act}>Summarize text</span></button>
          <button className={style.btn}><FontAwesomeIcon className={style.c} icon={faLightbulb} /><span className={style.act}>Make a Plan</span></button>
          <button className={style.btn}><span>More</span></button>
        </ul>
      </div>
    </div>
  )
}

export default hero