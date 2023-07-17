import React from 'react'
import Header from '../layout/Header'

import styles from './Profile.module.css'

import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'

import profile from '../../img/profile.png'

function Profile() {
  return ( <>
    <Header />
    <main className={styles.profile}>
        <div>
            <section>
                <span className={styles.profile_img}>
                    <img src={profile} alt='Profile img'/>
                    <h2>Suzana dos Santos</h2>
                </span>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero augue, gravida vitae aliquet a, consequat vel turpis. In quis metus facilisis, congue felis nec, consequat arcu. Suspendisse pharetra lorem sed lectus eleifend, id finibus ex volutpat. Nam dapibus turpis vitae metus faucibus feugiat. Suspendisse sed odio enim.</p>

                <div className={styles.icons}>
                    <AiOutlineMail/>
                    <AiOutlinePhone/>
                    <CiTwitter/>
                </div>

                <hr/>

                <h2>Work Experience</h2>
                <p><span>Experience 1</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero augue. </p> 
                <p><span>Experience 2</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero augue. </p>
            </section>

            <section>
                <h2>Portfolio</h2>
                <p><span>Project 1</span> -  Congue felis nec, consequat arcu. Suspendisse pharetra lorem sed lectus eleifend, id. </p>
                <p><span>Project 2</span> -  Congue felis nec, consequat arcu. Suspendisse pharetra lorem sed lectus eleifend, id. </p>
                <p><span>Project 3</span> -  Congue felis nec, consequat arcu. Suspendisse pharetra lorem sed lectus eleifend, id. </p>
                <p><span>Project 4</span> -  Congue felis nec, consequat arcu. Suspendisse pharetra lorem sed lectus eleifend, id. </p>

                <hr/>

                <h2>Recent activity</h2>
                <ul>
                    <li>Suzana added a <span>new project</span> to her portfolio...</li>
                    <li>Suzana joined the network of <span>James Clarke</span>!</li>
                    <li>Suzana joined the network of <span>Anna Silva</span>!</li>
                </ul>
            </section>
        </div>
    </main>
  </>)
}

export default Profile