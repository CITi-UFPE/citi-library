import React from 'react'
import ReactLoading from 'react-loading'
import styles from './style.scss'

const Spinner = () => <ReactLoading type='spin' color='#c0c0c0' className={styles.spinner} />

export default Spinner
