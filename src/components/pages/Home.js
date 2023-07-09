import React from 'react'
import Header from '../layout/Header'

import styles from './Home.module.css'

import image from '../../img/image.png'

function Home() {
  return (
  <>
    <Header />
    <main className={styles.main}>
      <img src={image} />
      <div>
        <h1>Find your new <span>job</span></h1>
        <p>Remote, freelance, part-time...</p>
        <button>Opportunities</button>
      </div>
    </main>
  </>
  )
}

export default Home