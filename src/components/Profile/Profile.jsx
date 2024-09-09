import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Profile.module.css'
import { SocialIcon } from 'react-social-icons'
import { DownloadCvButton } from '../DownloadCvButton/DownloadCvButton'

export const Profile = () => {
  return (
    <section className={styles.container}>
         <img className={styles.profileImg} src={getImageUrl("profile/profile_pic.png")} alt='profile pic' />
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Ravindu</h1>
            <p className={styles.description}>As a dynamic Full Stack Software Engineer with over 2 years of hands-on experience, I thrive on tackling complex challenges and transforming innovative ideas into robust, scalable solutions. My expertise spans both front-end and back-end development, allowing me to create seamless, high-performance applications. Driven by a passion for continuous learning and problem-solving, I am dedicated to delivering exceptional results and pushing the boundaries of technology. Let's build something extraordinary together.</p>
            <DownloadCvButton />  
            <div className={styles.socialIcons}>
            <SocialIcon url="https://www.linkedin.com/in/ravidudilshan/" />
            <SocialIcon url="https://github.com/RavinduDilshan" />
            <SocialIcon url="https://stackoverflow.com/users/10350353/ravidu-dilshan" />
            <SocialIcon url=" https://www.youtube.com/channel/UCUAV3VRpkqvaYGaF6X4ywcw" />
            <SocialIcon url="https://web.facebook.com/JALTHE" />
            <SocialIcon url=" https://www.instagram.com/ravidudil96/" />
          
            </div>
            
             
            
        </div>
       
    </section>
  )
}
