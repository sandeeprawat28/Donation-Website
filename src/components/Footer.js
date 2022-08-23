import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';


function Footer() {
  return (
    <div className="footer">
      <div className='footer_items'>
        <div className='address'>
          <h3>ADDRESS</h3>
          <ul>
            <li> Ghanta Ghar, 22 </li>
            <li> Moti Bazar Rd, Puran Market </li>
            <li> Dehradun, Uttarakhand 248001 </li>
          </ul>
        </div>
        <div className='opening_hours'>
          <h3>OPENING HOURS</h3>
          <ul>
            <li> Monday-Friday: 9:00 AM to 5:30 PM </li>
            <li> Saturday, Sunday & Government holidays: Off </li>
          </ul>
        </div>
        <div className='contact_info'>
          <h3>CONTACT INFO</h3>
          <ul>
            <li>Mobile No.: 91+ 26459 89564</li>
            <li>Phone No.: 0256-8954621</li>
            <li>Email: animalwelfare@example.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <h6>Copyright &copy; 2022 Animal Welfare | Sandeep Rawat</h6>
      <div className='social-icons'>
        <div className='icon'> <InstagramIcon /> </div>
        <div className='icon'> <WhatsAppIcon /> </div>
        <div className='icon'> <LinkedInIcon /> </div>
        <div className='icon'> <PinterestIcon /> </div>
        <div className='icon'> <FacebookIcon /> </div>
      </div> 
    </div>
  )
}

export default Footer