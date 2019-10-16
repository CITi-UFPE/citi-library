import { FaGithub } from 'react-icons/fa'
import React from 'react'
import styles from './style.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.howTo}>
      <h4>Como usar?</h4>
      <div>
        Tudo que você precisa fazer para utilizar o <code>/library</code> é ir no canal #library e
        usar o comando abaixo (tags são opcionais)
        <pre>
          <code>
            <strong>/library</strong> O que você quiser [tag1, tag2]
          </code>
        </pre>
      </div>
    </div>
    <div className={styles.author}>
      <a className={styles.source} href="https://github.com/CITi-UFPE/citi-library/">
        Código fonte <FaGithub />
      </a>
    </div>
  </div>
)

export default Footer
