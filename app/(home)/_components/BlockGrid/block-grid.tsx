import Card from '../Card/card'
import CardTips from '../CardTips/card-tips'
import CardTrip from '../CardTrip/card-trip'
import WhyChoose from '../WhyChose/why-choose'
import {
  data_card_trips,
  data_card_destinations,
  data_why_choose,
  data_card_tips,
} from '@/data/data_card'
import './block-grid.scss'

interface BlockGridProps {
  title: string
  description: string
  cardTrip?: boolean
  cardDestinations?: boolean
  whyChose?: boolean
  cardTips?: boolean
}

const BlockGrid = ({
  title,
  description,
  cardTrip,
  cardDestinations,
  whyChose,
  cardTips,
}: BlockGridProps) => {
  return (
    <div className='main'>
      <div className='block-grid'>
        <h2 className='title'>{title}</h2>
        <div className='description'>{description}</div>
        <div className='block-card'>
          {cardTrip && (
            <>
              {data_card_trips?.map((item, index) => (
                <CardTrip key={index} url={item} />
              ))}
            </>
          )}

          {cardDestinations && (
            <>
              {data_card_destinations?.map((item, index) => (
                <Card key={index} name={item.name} url={item.url} />
              ))}
            </>
          )}

          {whyChose && (
            <>
              {data_why_choose?.map((item, index) => (
                <WhyChoose
                  key={index}
                  url={item.url}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </>
          )}

          {cardTips && (
            <>
              {data_card_tips?.map((item, index) => (
                <CardTips
                  key={index}
                  url={item.url}
                  date={item.date}
                  desc={item.desc}
                  title={item.title}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlockGrid
