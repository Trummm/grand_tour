'use client'

import { Facebook, Instagram, Twitter, Webhook, X, Youtube } from 'lucide-react'
import './mobile-menu-wrapper.scss'
import Image from 'next/image'
import Start from '@/public/star.png'
import Start2 from '@/public/star-2.png'

const MobileMenuWrapper = () => {
  return (
    <>
      <div className='menu_wrapper'>
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
        >
          <div className='icon_x'>
            <X size={16} />
          </div>
        </div>

        <ul className='menu_mobile_list'>
          <li className='menu_mobile_list_item'>Home</li>
          <li className='menu_mobile_list_item'>Tours</li>
          <li className='menu_mobile_list_item'>Booking</li>
          <li className='menu_mobile_list_item'>Destinations</li>
          <li className='menu_mobile_list_item'>Pages</li>
          <li className='menu_mobile_list_item'>Blog</li>
          <li className='menu_mobile_list_item'>ShortCodes</li>
          <li className='menu_mobile_list_item'>Shop</li>
        </ul>

        <div className='menu_mobile_img'>
          <div
            className='menu_mobile_item'
            style={{
              backgroundImage:
                'url(https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg)',
            }}
          >
            <div className='menu_mobile_price'>$3,900</div>
            <h5 className='menu_mobile_name'>Swiss Alps Trip</h5>
            <div className='menu_mobile_star'>
              <Image src={Start} alt='' />
              <Image src={Start} alt='' />
              <Image src={Start} alt='' />
              <Image src={Start} alt='' />
              <Image src={Start2} alt='' />
            </div>
          </div>
          <div
            className='menu_mobile_item'
            style={{
              backgroundImage:
                'url(https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg)',
            }}
          >
            <div className='menu_mobile_price'>$4,200</div>
            <h5 className='menu_mobile_name'>5 Lake Of Fuji San</h5>
            <div className='menu_mobile_star'>
              <Image src={Start} alt='' />
              <Image src={Start} alt='' />
              <Image src={Start} alt='' />
              <Image src={Start} alt='' />
              <Image src={Start2} alt='' />
            </div>
          </div>
        </div>

        <div className='menu_mobile_social'>
          <Facebook size={24} color='black' />
          <Twitter size={24} color='black' />
          <Youtube size={24} color='black' />
          <Webhook size={24} color='black' />
          <Instagram size={24} color='black' />
        </div>
      </div>

      <div className='mark'></div>
    </>
  )
}

export default MobileMenuWrapper
