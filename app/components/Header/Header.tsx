import React from "react"
import Styles from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const header = () => {
  return (
    <div className= {Styles.container}>
      <header className={Styles.navbar}>
        <div className={Styles.head}>
         <button className={Styles.logo}>
         <FontAwesomeIcon icon={faPenToSquare} />
         </button>
         <div className={Styles.text}>ChatGPT <span>4o mini</span></div>
        </div>
        <div className={Styles.btn}>
         <button className={Styles.log}>Log in</button>
         <button className={Styles.sign}>Sign up</button>
        </div>
      </header>
    </div>
  )
}

export default header