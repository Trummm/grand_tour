import BlockGrid from './_components/BlockGrid/block-grid'
import CenterWrapper from './_components/CenterWrapper/center-wrapper'
import Footer from './_components/Footer/footer'
import Heading from './_components/Heading/heading'
import ImageBanner from './_components/ImageBanner/image-banner'

export default function Home() {
  return (
    <>
      <Heading />
      <CenterWrapper />
      <BlockGrid
        title='Popular Destinations'
        description='World best tourist destinations'
        cardDestinations={true}
      />
      <BlockGrid
        title='Best Value Trips'
        description='Best offers trips from us'
        cardTrip={true}
      />
      <BlockGrid
        title='Why Choose Us'
        description='Here are reasons you should plan trip with us'
        whyChose={true}
      />
      <ImageBanner />

      <BlockGrid
        title='Articles & Tips'
        description='Explore some of the best tips from around the world'
        cardTips={true}
      />
      <Footer />
    </>
  )
}
