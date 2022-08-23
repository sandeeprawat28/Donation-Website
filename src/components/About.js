import React from 'react';
import './About.css'

function About() {
  return (
    <div className='about'>
      <h2>About us</h2>
      <p>
      <img className='img-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/World_Animal_Protection_logo.svg/220px-World_Animal_Protection_logo.svg.png' alt="img" />
        <b>World Organisation for Animal Health (OIE):</b> The intergovernmental organisation responsible for improving animal health worldwide. The OIE has been established "for the purpose of projects of international public utility relating to the control of animal diseases, including those affecting humans and the promotion of animal welfare and animal production food safety."
         <br></br><b>World Animal Protection:</b> Protects animals across the globe. World Animal Protection's objectives include helping people understand the critical importance of good animal welfare, encouraging nations to commit to animal-friendly practices, and building the scientific case for the better treatment of animals. They are global in a sense that they have consultative status at the Council of Europe and collaborate with national governments, 
        the United Nations, the Food and Agriculture Organization and the World Organization for Animal Health.
      </p>
      <hr></hr>
      <div className='div'>
      <p>
      <img className='img-2' src='https://images.pexels.com/photos/9732886/pexels-photo-9732886.jpeg?auto=compress&cs=tinysrgb&w=600' alt="img" />
        <b>World Organisation for Animal Health (OIE):</b> The intergovernmental organisation responsible for improving animal health worldwide. The OIE has been established "for the purpose of projects of international public utility relating to the control of animal diseases, including those affecting humans and the promotion of animal welfare and animal production food safety."
         <br></br><b>World Animal Protection:</b> Protects animals across the globe. World Animal Protection's objectives include helping people understand the critical importance of good animal welfare, encouraging nations to commit to animal-friendly practices, and building the scientific case for the better treatment of animals. They are global in a sense that they have consultative status at the Council of Europe and collaborate with national governments, 
        the United Nations, the Food and Agriculture Organization and the World Organization for Animal Health.
      </p>
      <hr></hr>
      </div>
      <p>
      <img className='img-3'src='https://images.pexels.com/photos/9823925/pexels-photo-9823925.jpeg?auto=compress&cs=tinysrgb&w=600' alt="img" />
        <b>World Animal Protection:</b> Protects animals across the globe. World Animal Protection's objectives include helping people understand the critical importance of good animal welfare, encouraging nations to commit to animal-friendly practices, and building the scientific case for the better treatment of animals. They are global in a sense that they have consultative status at the Council of Europe and collaborate with national governments, 
        the United Nations, the Food and Agriculture Organization and the World Organization for Animal Health. Protects animals across the globe. World Animal Protection's objectives include helping people understand the critical importance of good animal welfare, encouraging nations to commit to animal-friendly practices, and building the scientific case for the better treatment of animals. They are global in a sense that they have  collaborate with national governments, 
        the Food and Agriculture Organization and the World Organization for Animal Health.
      </p>
      <hr></hr>
      <div className='news_form'>
        <div className='news-title'>
          <h6>Subscribe for daily Newslatter</h6>
        </div>
        <div className='news'>
          <input type="email" placeholder='Enter your email address' />
          <button className='news_btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default About