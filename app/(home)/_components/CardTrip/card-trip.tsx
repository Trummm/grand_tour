import { Clock4 } from 'lucide-react'
import './card-trip.scss'
import Image from 'next/image'
import Start from '@/public/star.png'
import Start2 from '@/public/star-2.png'

interface CardTripProps {
  url: string
}

const CardTrip = ({ url }: CardTripProps) => {
  return (
    <div className='card-trip'>
      <div className='card-trip-top' style={{ backgroundImage: `url(${url})` }}>
        <div className='tag'>$5,000</div>
      </div>
      <div className='card-trip-bottom'>
        <h4>French Autumn</h4>
        <p>City Tours, Urban</p>
        <div className='review'>
          <div className='review-left'>
            <Image src={Start} alt='' />
            <Image src={Start} alt='' />
            <Image src={Start} alt='' />
            <Image src={Start} alt='' />
            <Image src={Start2} alt='' />
            <p>4 reviews</p>
          </div>
          <div className='review-right'>
            {' '}
            <Clock4 size={12} strokeWidth={1.25} />5 days
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTrip
