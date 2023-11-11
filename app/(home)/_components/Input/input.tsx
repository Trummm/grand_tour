import { LucideIcon } from 'lucide-react'
import './input.scss'

interface InputProps {
  type: string
  placeholder: string
  icon: LucideIcon
}

const Input = ({ type, placeholder, icon: Icon }: InputProps) => {
  return (
    <div className='input'>
      <input type={type} placeholder={placeholder} />
      <div className='input_icon'>
        <Icon className='input_icon' width={15} height={15} />
      </div>
    </div>
  )
}

export default Input
