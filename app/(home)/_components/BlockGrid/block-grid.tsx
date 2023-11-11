import Card from '../Card/card'
import CardTips from '../CardTips/card-tips'
import CardTrip from '../CardTrip/card-trip'
import WhyChoose from '../WhyChose/why-choose'
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
              <CardTrip url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg' />
              <CardTrip url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg' />
              <CardTrip url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg' />
            </>
          )}

          {cardDestinations && (
            <>
              <Card
                name='Tokyo'
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg'
              />
              <Card
                name='Seoul'
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg'
              />
              <Card
                name='Paris'
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg'
              />
              <Card
                name='London'
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg'
              />
            </>
          )}

          {whyChose && (
            <>
              <WhyChoose
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png'
                title='Handpicked Hotels'
                desc='Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
              />
              <WhyChoose
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png'
                title='World Class Service'
                desc='Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
              />
              <WhyChoose
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png'
                title='Best Price Guarantee'
                desc='Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
              />
            </>
          )}

          {cardTips && (
            <>
              <CardTips
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg'
                date='DECEMBER 10, 2016'
                desc='Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...'
                title='Memorial Day to Someone Told Me to Travel'
              />
              <CardTips
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg'
                date='DECEMBER 10, 2016'
                desc='Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...'
                title='7 Tips For Nomads On A Budget Trips'
              />
              <CardTips
                url='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg'
                date='DECEMBER 10, 2016'
                desc='Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...'
                title='Taking A Travel Blog Victory Lap'
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlockGrid
