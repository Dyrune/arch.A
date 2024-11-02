


import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faUpwork, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Autoplay } from 'swiper/modules';
import { initializeScrollAnimation } from './ScrollAnimation';
import EmailLink from './EmailLink';

function Contact() {
  useEffect(() => {
    const cleanupScrollAnimation = initializeScrollAnimation();

    // Cleanup on component unmount
    return () => {
      cleanupScrollAnimation();
    };
  }, []); // Runs only once when the component mounts
  const imagesSet1 = [
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://plus.unsplash.com/premium_photo-1685133855379-711aa008f7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://plus.unsplash.com/premium_photo-1670176447308-41ce514dd228?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 ];

  const imagesSet2 = [
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1729731321983-fc2023771966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNDd8fHxlbnwwfHx8fHw%3D',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1729731321983-fc2023771966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNDd8fHxlbnwwfHx8fHw%3D',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 ];

  const imagesSet3 = [
    'https://plus.unsplash.com/premium_photo-1670176447261-dc597b36ce5b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://plus.unsplash.com/premium_photo-1670176447261-dc597b36ce5b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://plus.unsplash.com/premium_photo-1670176447261-dc597b36ce5b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 ];

  const imagesSet4 = [
    'https://images.unsplash.com/photo-1729560386606-9688cc485e8c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1670176447261-dc597b36ce5b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1729560386606-9688cc485e8c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 ];

  const imagesSet5 = [
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://plus.unsplash.com/premium_photo-1670176447308-41ce514dd228?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1729560386606-9688cc485e8c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 ];
 
 
  return (
    <section id="contact" className="contact">
      <div className='coco'>
      <div>
        <h2 className='animation-element slide-left'>Build a better home with Noting</h2>
      </div>

      {/* Contact Form */}
    
      {/* Contact Form */}
<div className="contact-form">
  <ul className="contact-info">
    <li>
    <FontAwesomeIcon icon={faEnvelope} className="icon" />
      <span className="contact-text">
        <p> <EmailLink email="david.formarchitect@gmail.com"/></p>
        <p> <EmailLink email="david.akinloye@outlook.com"/></p>
        
      </span>
    </li>
    <li>
      <FontAwesomeIcon icon={faPhone} className="icon" />
      <span className="contact-text">
        <p>
        <a href="tel:+12313987268">+1 (231) 398-7268</a></p>
        <p>
        <a href="tel:+2348142288064">+234-814-228-8064</a></p>
      </span>
    </li>
  </ul>
</div>

      {/* Social Icons */}
      <div className="social-icons">
        <FontAwesomeIcon icon={faInstagram} className="icon" />
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        <FontAwesomeIcon icon={faXTwitter} className="icon" />
        <FontAwesomeIcon icon={faUpwork} className="icon" />
      </div>
      </div>

      <div className="image-sliders">
  {/* First Row: Standalone Swiper */}
  <div className="slider-row">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      direction="vertical"
      loop={true}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      speed={2000}
      style={{ width: '150px', height: '400px' }} // Set consistent height
    >
      {imagesSet1.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <img
            src={imgSrc}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Second Row: Middle Swiper Containers */}
  <div className="slider-row">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      speed={2000}
      style={{ width: '150px', height: '100%' }} // Leave unchanged
    >
      {imagesSet2.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <img
            src={imgSrc}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4300, disableOnInteraction: false }}
      speed={2000}
      style={{ width: '150px', height: '100%' }} // Leave unchanged
    >
      {imagesSet3.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <img
            src={imgSrc}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Third Row: Two Swiper Containers with Matching Height */}
  <div className="slider-column">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      speed={2000}
      style={{ width: '150px', height: '190px' }} // Match height with the first Swiper
    >
      {imagesSet4.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <img
            src={imgSrc}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      direction="vertical"
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      speed={2000}
      style={{ width: '150px', height: '190px' }} // Match height with the first Swiper
    >
      {imagesSet5.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <img
            src={imgSrc}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

    </section>
  );
}

export default Contact;
