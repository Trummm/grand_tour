'use client'

import Image from 'next/image'
import Logo from '../../../../public/logo_header.png'
import LogoDark from '../../../../public/logo_dark.png'
import './heading.scss'
import Navbar from '../Navbar/navbar'
import { ChevronDown, Menu, ShoppingCart } from 'lucide-react'
import {
  data_menu_home,
  data_menu_tours,
  data_menu_booking,
  data_menu_destinations,
  data_menu_pages,
  data_menu_blog,
  data_menu_shortcodes,
  data_menu_shop,
} from '@/data/data_menu'
import { useEffect, useState } from 'react'
import MobileMenuWrapper from '../MobileMenuWrapper/mobile-menu-wrapper'

const Heading = () => {
  const [icon, setIcon] = useState(Logo)
  const [buttonMenu, setButtonMenu] = useState(false)

  const handleClick = () => {
    setButtonMenu(!buttonMenu)
  }

  useEffect(() => {
    const menuWrapperElement = document.querySelector(
      '.menu_wrapper'
    ) as HTMLElement | null

    const markElement = document.querySelector('.mark') as HTMLElement | null
    const iconXElement = document.querySelector('.icon_x') as HTMLElement | null

    if (buttonMenu) {
      menuWrapperElement!.style.transform = 'translateX(0)'
      markElement!.style.display = 'block'
    } else {
      menuWrapperElement!.style.transform = 'translateX(360px)'
      markElement!.style.display = 'none'
    }

    iconXElement?.addEventListener('click', () => {
      setButtonMenu(false)
    })
  }, [buttonMenu])

  useEffect(() => {
    const headerElement = document.querySelector('#top_header')
    var lastScrollPosition = 0
    window.addEventListener('scroll', (e) => {
      var currentScrollPosition = window.scrollY

      if (currentScrollPosition > lastScrollPosition) {
        headerElement?.classList.add('hidden')
      } else if (currentScrollPosition < lastScrollPosition) {
        setIcon(LogoDark)
        headerElement?.classList.remove('hidden')
        headerElement?.classList.add('top_bar_block')
      }

      lastScrollPosition = currentScrollPosition

      if (currentScrollPosition === 0) {
        setIcon(Logo)
        headerElement?.classList.remove('top_bar_block')
        headerElement?.classList.remove('hidden')
      }
    })
  }, [icon])

  return (
    <>
      <MobileMenuWrapper />
      <div className='top_bar' id='top_header'>
        <div className='standard_wrapper'>
          <div className='logo_wrapper'>
            <div className='logo'>
              <a href='' className='logo_link'>
                <Image
                  src={icon}
                  alt='logo'
                  className='logo_img'
                  width={92}
                  height={22}
                />
              </a>
            </div>
            <ul className='menu_list'>
              <Navbar name='Home' icon={ChevronDown} data={data_menu_home} />
              <Navbar name='Tours' icon={ChevronDown} data={data_menu_tours} />
              <Navbar
                name='Booking'
                icon={ChevronDown}
                data={data_menu_booking}
              />
              <Navbar
                name='Destinations'
                icon={ChevronDown}
                data={data_menu_destinations}
              />
              <Navbar name='Pages' icon={ChevronDown} data={data_menu_pages} />
              <Navbar name='Blog' icon={ChevronDown} data={data_menu_blog} />
              <Navbar
                name='ShortCodes'
                icon={ChevronDown}
                data={data_menu_shortcodes}
              />
              <Navbar name='Shop' icon={ChevronDown} data={data_menu_shop} />
              <Navbar icon={Menu} id='menu_button' onClick={handleClick} />
              <Navbar icon={ShoppingCart} />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Heading
