import { ChevronRight } from 'lucide-react'
import './card-tips.scss'

interface CardTipsProps {
  url: string
  date: string
  title: string
  desc: string
}

const CardTips = ({ url, date, title, desc }: CardTipsProps) => {
  return (
    <div className='card-tips'>
      <div
        className='tips_top'
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div className='tips_bottom'>
        <span>{date}</span>
        <h6>{title}</h6>
        <p>{desc}</p>
        <div className='button-tips'>
          Read more
          <ChevronRight size={15} />
        </div>
      </div>
    </div>
  )
}

export default CardTips
