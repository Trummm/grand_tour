import { LucideIcon } from 'lucide-react'
import './select.scss'

interface SelectProps {
  title: string
  data: any
  icon: LucideIcon
}

const Select = ({ title, data, icon: Icon }: SelectProps) => {
  return (
    <div className='select'>
      <select id='month' name='month'>
        <option value=''>{title}</option>
        {data?.map((item: any, index: any) => (
          <option key={index} value='january'>
            {item}
          </option>
        ))}
      </select>
      <Icon className='ti-calendar' width={15} height={15} />
    </div>
  )
}

export default Select
