import './card.scss'

interface Cardprops {
  url: string
  name: string
}

const Card = ({ name, url }: Cardprops) => {
  return (
    <div className='card' style={{ backgroundImage: `url(${url})` }}>
      <div className="overlay_card"></div>
      <div className='card-name'>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Card
