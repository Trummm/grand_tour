import {
  MapPin,
  Smartphone,
  AlarmClock,
  Facebook,
  Twitter,
  Youtube,
  Webhook,
  Instagram,
} from 'lucide-react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_top'>
        <div className='footer_award'>
          <h2>Our Awards</h2>
          <p>
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </p>
          <img
            src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png'
            alt=''
            width={246}
            height={113}
          />
        </div>
        <div className='footer_contact'>
          <h2>Contact Info</h2>
          <p>
            <Smartphone size={15} />
            1-567-124-44227
          </p>
          <p>
            <MapPin size={15} />
            184 Main Street East Perl Habour 8007
          </p>
          <p>
            <AlarmClock size={15} />
            Mon - Sat 8.00 - 18.00 Sunday CLOSED
          </p>
          <div style={{ display: 'flex' }}>
            <div className='social facebook'>
              <Facebook />
            </div>
            <div className='social twitter'>
              <Twitter />
            </div>
            <div className='social youtube'>
              <Youtube />
            </div>
            <div className='social pinterest'>
              <Webhook />
            </div>
            <div className='social instagram'>
              <Instagram />
            </div>
          </div>
        </div>
        <div className='footer_trips'>
          <h2>Recent Trips</h2>
          <div className='trips_image'>
            <div
              className='image_item'
              style={{
                backgroundImage:
                  'url(https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg)',
              }}
            ></div>
            <div
              className='image_item'
              style={{
                backgroundImage:
                  'url(https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg)',
              }}
            ></div>
            <div
              className='image_item'
              style={{
                backgroundImage:
                  'url(https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg)',
              }}
            ></div>
            <div
              className='image_item'
              style={{
                backgroundImage:
                  'url(https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg)',
              }}
            ></div>
            <div
              className='image_item'
              style={{
                backgroundImage:
                  'url(https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg)',
              }}
            ></div>
            <div
              className='image_item'
              style={{
                backgroundImage:
                  'url(https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg)',
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className='footer_bar'>
        <div>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
        <ul>
          <li>Home</li>
          <li>Tours</li>
          <li>Blog</li>
          <li>ThemeGoods</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
