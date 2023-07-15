import React from 'react'
import Header from '../layout/Header'

import styles from './Job.module.css'
import {BsBookmark} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineArrowRight} from 'react-icons/ai'

import company_logo from '../../img/company_logo.png'

function Job() {
  return ( <>
  <Header />
  <main className={styles.job}>
    <h1>Jobs</h1>
    <div className={styles.options}>
      <input type='search' placeholder='Search...'/>
      <div>
        <span>
          <BsBookmark className={styles.icon}/>
          <p>Save</p>
        </span>

        <span>
          <FiSettings className={styles.icon}/>
          <p>Settings</p>
        </span>
      </div>
    </div>

    <div className={styles.jobs}>
      <div className={styles.row}>
        <img src={company_logo} alt='Company logo'/>

        <div>
          <h4>Junior QA Specialist</h4>
          <p>China</p>
        </div>
      </div>

      <div className={styles.row}>
        <img src={company_logo} alt='Company logo'/>

        <div>
          <h4>Intern</h4>
          <p>Brazil</p>
        </div>
      </div>

      <div className={styles.row}>
        <img src={company_logo} alt='Company logo'/>

        <div>
          <h4>UI/UX Designer</h4>
          <p>Brazil</p>
        </div>
      </div>

      <div className={styles.row}>
        <img src={company_logo} alt='Company logo'/>

        <div>
          <h4>Junior QA Specialist</h4>
          <p>China</p>
        </div>
      </div>

      <div className={styles.row}>
        <img src={company_logo} alt='Company logo'/>

        <div>
          <h4>Intern</h4>
          <p>Brazil</p>
        </div>
      </div>

      <AiOutlineArrowRight className={styles.icon}/>
    </div>
  </main>
  </>)
}

export default Job