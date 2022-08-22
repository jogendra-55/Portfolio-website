import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Ion Bishop',
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti adipisci facilis doloremque sint, quibusdam omnis? Ipsam natus doloribus voluptatum voluptatibus inventore architecto, ad maiores repellat cupiditate. Blanditiis, beatae dolore'

  },
  {
    avatar: AVTR2,
    name: 'Ion Bishp',
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti adipisci facilis doloremque sint, quibusdam omnis? Ipsam natus doloribus voluptatum voluptatibus inventore architecto, ad maiores repellat cupiditate. Blanditiis, beatae dolore'

  },
  {
    avatar: AVTR3,
    name: 'Ion Bshop',
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti adipisci facilis doloremque sint, quibusdam omnis? Ipsam natus doloribus voluptatum voluptatibus inventore architecto, ad maiores repellat cupiditate. Blanditiis, beatae dolore'

  },
  {
    avatar: AVTR4,
    name: 'Ion Bihop',
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti adipisci facilis doloremque sint, quibusdam omnis? Ipsam natus doloribus voluptatum voluptatibus inventore architecto, ad maiores repellat cupiditate. Blanditiis, beatae dolore'

  },



]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
>
        {
          data.map(({ avatar, name, reveiw }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt=''/>
              </div>
              <h5 className="client__name">
                {name}
              </h5>
              <small className="client__reveiw">
                {reveiw}
              </small>
            </SwiperSlide>
          )
        })
        }

      </Swiper>
    </section >
  )
}

export default Testimonial