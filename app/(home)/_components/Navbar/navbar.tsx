interface NavbarProps {
  name?: string
  icon: LucideIcon
  data?: any
  id?: string
  onClick?: () => void
}

import { LucideIcon } from 'lucide-react'
import './navbar.scss'

const Navbar = ({ name, icon: Icon, data, id, onClick }: NavbarProps) => {
  return (
    <>
      <li className='navbar_item' id={id} onClick={onClick}>
        {name} <Icon width={16} className='navbar_icon' />
        <ul className='item_hover'>
          {data?.map((item: any, index: any) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </li>
    </>
  )
}

export default Navbar
