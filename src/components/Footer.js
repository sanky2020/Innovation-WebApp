import React from 'react'
import Header from '../header/Header'
import '../styles/Footer.css'
import {TiSocialTwitter, TiSocialFacebook, TiSocialLinkedin, TiSocialInstagram} from 'react-icons/ti'

function Footer() {
  return (
    <footer>
        <Header/>
        <div className='termsAndConditions'>
            <div className='connectUsOn'>
                <p>Connect us on</p>
                <div className='social-icons'>
                    <div className='socialIconsWrapper'><TiSocialTwitter/></div>
                    <div className='socialIconsWrapper'><TiSocialFacebook/></div>
                    <div className='socialIconsWrapper'><TiSocialLinkedin/></div>
                    <div className='socialIconsWrapper'><TiSocialInstagram/></div>
                </div>
            </div>
            <div className='tnc'>
                <p>Terms and Conditions</p>
                <p>© Innovation 2022</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer