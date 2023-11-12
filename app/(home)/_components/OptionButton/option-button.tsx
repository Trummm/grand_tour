'use client'

import { BookOpen, Heart, Settings, ShoppingCart } from 'lucide-react'
import './option-button.scss'
import { use, useEffect, useState } from 'react'
import { data_colors } from '@/data/data_color'

const OptionButton = () => {
  const [button, setButton] = useState(false)

  const handleClick = () => {
    setButton(!button)
  }

  useEffect(() => {
    var optionElement = document.querySelector('.option') as HTMLElement | null
    if (button) {
      optionElement!.style.transform = 'translateX(0)'
    } else {
      optionElement!.style.transform = 'translateX(360px)'
    }
  })

  return (
    <div className='main_option'>
      <div className='option'>
        <h6>Created With Grand Tour</h6>
        <p>
          We designed Grand Tour theme to make it works especially for tour &
          travel site. Here are a few included examples that you can import with
          one click.
        </p>
        <ul className='demo-list'>
          <li className='demo-list-item'></li>
          <li className='demo-list-item'></li>
        </ul>
        <h6>Predefined Colors</h6>
        <ul className='option_color'>
          {data_colors?.map((item, index) => (
            <li
              key={index}
              className='option_color_item'
              style={{ backgroundColor: `${item}` }}
            ></li>
          ))}
        </ul>
        <h6>Predefined Stylings</h6>
        <ul className='demo-list'>
          <li className='demo-list-item'></li>
          <li className='demo-list-item'></li>
          <li className='demo-list-item'></li>
          <li className='demo-list-item'></li>
          <li className='demo-list-item'></li>
          <li className='demo-list-item'></li>
          <li className='demo-list-item'></li>
          <li className='demo-list-item'></li>
        </ul>
        <div className='option_button'>
          <Settings
            size={15}
            color='black'
            id='setting'
            onClick={handleClick}
          />
          <Heart size={15} color='black' />
          <BookOpen size={15} color='black' />
          <ShoppingCart size={15} color='black' />
        </div>
      </div>
    </div>
  )
}

export default OptionButton
