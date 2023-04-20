import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="footer flex">
          <div className='footerDiv'>
            <h3>Social</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Whatsapp</li>
            </ul>
          </div>
          <div className='footerDiv'>
            <h3>My Account</h3>
            <ul>
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className='footerDiv'>
              <h3>Extras</h3>
              <ul>
                <li>Logo</li>
                <li>Address</li>
              </ul>
          </div>
        </div>
        <p id='SecFooter'>@ Created by Arjun thakur</p>
    </>
  )
}

export default Footer