import React from 'react'
import styles from "./footer.module.css"

const footer  = () => {
  return (
    <div>
      <footer className={styles.span}>
        <span>By messaging ChatGPT, you agree to our <a>Terms</a> and have read our <a>Privacy Policy</a>.</span>
      </footer>
    </div>
  )
}

export default footer