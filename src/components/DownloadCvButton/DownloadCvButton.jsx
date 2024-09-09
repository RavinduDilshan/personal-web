import React from 'react'
import styles from './DownloadCvButton.module.css'

export const DownloadCvButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../../../assets/ravindudilshancv.pdf'; // Replace with the correct path to your resume
        link.download = 'Ravindu_dilshan.pdf'; // This will be the name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <button className={styles.outlinedbutton} onClick={handleDownload}>Download Resume</button>   
  )
}
