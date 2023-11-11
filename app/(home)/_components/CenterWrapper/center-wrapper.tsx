'use client'
import {
  ArrowDownUp,
  BadgeDollarSign,
  Calendar,
  ChevronDown,
  ChevronUp,
  Search,
} from 'lucide-react'
import Input from '../Input/input'
import './center-wrapper.scss'
import Select from '../Select/select'
import {
  data_select_month,
  data_select_sort,
  data_select_categories,
  data_select_destinations,
} from '@/data/data_select'
import { useState } from 'react'

interface CenterWrapperProps {
  onClick?: () => void
}

const CenterWrapper = () => {
  const [handleClick, setHandleClick] = useState(false)

  const handleDisableBlock = () => {
    setHandleClick(!handleClick)
  }

  return (
    <div className='center_video'>
      <div className='overlay_background'></div>
      <video autoPlay muted loop className='video_item'>
        <source src='./video2.mp4' type='video/mp4' />
      </video>

      <div className='center_wrapper'>
        <h2>Where do you want to go?</h2>
        <span>Trips, experiences, and places. All in one service.</span>
        <div className='form-search'>
          <Input type='text' placeholder='Destination, city' icon={Search} />
          <Select title='Any Month' icon={Calendar} data={data_select_month} />
          <Select
            title='Sort By Day'
            icon={ArrowDownUp}
            data={data_select_sort}
          />
          <button>Search</button>

          {handleClick ? (
            <div className='hidden-form' id='hidden'>
              <Select
                title='All Categories'
                icon={ArrowDownUp}
                data={data_select_categories}
              />
              <Select
                title='Any Destinations'
                icon={ArrowDownUp}
                data={data_select_destinations}
              />
              <Input
                type='text'
                placeholder='Max budget ex. 500'
                icon={BadgeDollarSign}
              />

              <button>Search</button>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className='text-handle' onClick={handleDisableBlock}>
          {handleClick ? <ChevronUp /> : <ChevronDown />}
          Advanced Search
        </div>
      </div>
    </div>
  )
}

export default CenterWrapper
