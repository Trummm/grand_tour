import Image from 'next/image'
import './why-choose.scss'

interface WhoChooseProps {
  url: string
  title: string
  desc: string
}

const WhyChoose = ({ url, title, desc }: WhoChooseProps) => {
  return (
    <div className='why-choose-block'>
      <Image src={url} alt='' />
      <span>{title}</span>
      <p>{desc}</p>
    </div>
  )
}

export default WhyChoose
