import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomarRate.css';
import me from './me.jpg';

const testimonials = [
  {
    text: 'When my brother went missing, our family was devastated. We had almost given up hope until we found this incredible service Within weeks.',
    author: 'Abdalrhman Ahmed',
    type: 'Found',
    image: me,
  },
  {
    text: 'I cant express how grateful I am for this website.They truly care about reuniting families and put in so much effort to find my missing daughter.',
    author: 'Abdalrhman Ahmed',
    type: 'Lost',
    image: "https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce3e584104be2e330e0_hero_person-2.webp"
  },
  {
    text: 'The support and resources provided by this team are phenomenal. They guided us every step of the way and were there for us emotionally too.',
    author: 'Abdalrhman Ahmed',
    type: 'Lost',
    image: "https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3.webp",
  },
  {
    text: 'This service is a beacon of hope for families in distress. Their persistence and determination in finding my missing son brought him back to us.',
    author: 'Abdalrhman Ahmed',
    type: 'Found',
    image: "https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1-p-500.webp",
  },
  {
    text: 'I found my lost brother, reunited him with our family, and restored our happiness.',
    author: 'Abdalrhman Ahmed',
    type: 'Lost',
    image: me,
  
  },
  {
    text: 'They located my missing daughter, brought her home safely, and gave us peace.',
    author: 'Abdalrhman Ahmed',
    type: 'Found',
    image: me,
    className:'d',
  },
  
];

const CustomarRate = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel">
      <h2>What our customers say <span className='dot'>.</span></h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p className="author-position">{testimonial.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow swiper__nav-arrow mod--right`}
      style={{ ...style, display:'flex', right: '50%', transform: 'translateX(50%)' }}
      onClick={onClick}
      tabIndex="0"
      role="button"
      aria-label="Next slide"
      aria-controls="swiper-wrapper-8fc5d3c5ed4acf2f"
      aria-disabled="false"
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow swiper__nav-arrow mod--left`}
      style={{ ...style,display:'flex', left: '50%', transform: 'translateX(-50%)',  }}
      onClick={onClick}
      tabIndex="0"
      role="button"
      aria-label="Previous slide"
      aria-controls="swiper-wrapper-8fc5d3c5ed4acf2f"
      aria-disabled="true"
      
    />
    
  );
};



export default CustomarRate;
