import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="z-20 fixed bottom-6 right-5 md:right-10">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'} bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2`}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}