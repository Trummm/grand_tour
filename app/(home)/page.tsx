import BlockGrid from './_components/BlockGrid/block-grid'
import ButtonTop from './_components/ButtonTopPage/button-top'
import CenterWrapper from './_components/CenterWrapper/center-wrapper'
import Footer from './_components/Footer/footer'
import Heading from './_components/Heading/heading'
import ImageBanner from './_components/ImageBanner/image-banner'
import MobileMenuWrapper from './_components/MobileMenuWrapper/mobile-menu-wrapper'
import OptionButton from './_components/OptionButton/option-button'

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <OptionButton />
      <Heading />
      <ButtonTop />
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
    </div>
  )
}
