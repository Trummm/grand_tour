'use client'

import { ChevronUp } from 'lucide-react'
import './button-top.scss'
import { useEffect } from 'react'

const ButtonTop = () => {
  useEffect(() => {
    var btn = document.querySelector('#button')

    btn?.addEventListener('click', function (e) {
      e.preventDefault()

      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        btn?.classList.add('show')
      } else {
        btn?.classList.remove('show')
      }
    })
  }, [])

  return (
    <div className='button-top' id='button'>
      <ChevronUp size={15} />
    </div>
  )
}

export default ButtonTop
