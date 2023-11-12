import './card.scss'

interface CardProps {
  url: string
  name: string
}

const Card = ({ name, url }: CardProps) => {
  return (
    <div className='card' style={{ backgroundImage: `url(${url})` }}>
      <div className='overlay_card'></div>
      <div className='card-name'>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Card
