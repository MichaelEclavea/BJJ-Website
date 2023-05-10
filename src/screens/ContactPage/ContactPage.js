import React from 'react'
import styles from './contact.module.scss';
import Button from '@mui/material/Button/Button';

const ContactPage = ({ scrollToTop }) => {
  
  return (
    <div id={'contact'} className={styles.contactPageContainer}>
      <h2>Contact Us</h2>
      <Button href={'/#home'} onClick={() => scrollToTop()}>Scroll to Top</Button>
    </div>
  )
}

export default ContactPage;