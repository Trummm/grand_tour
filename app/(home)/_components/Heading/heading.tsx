import Image from 'next/image'
import Logo from '../../../../public/logo_header.png'
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

const Heading = () => {
  return (
    <div className='top_bar'>
      <div className='standard_wrapper'>
        <div className='logo_wrapper'>
          <div className='logo'>
            <a href='' className='logo_link'>
              <Image
                src={Logo}
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
            <Navbar icon={Menu} />
            <Navbar icon={ShoppingCart} />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Heading
