'use client'
import { useStore } from '../src/store'
import OnloadImage from './OnloadImage'
import mathImage from './images/table.jpg'
import codingImage from './images/coding.webp'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function Overview(){
  const [maskOn, setMaskOn] = useState(false)
    // useStore.setState({price : 2})
  let image1 = useRef(null)
  let image2 = useRef(null)
  let wrapper = useRef(null)
  let toggle = useRef(true)
  const rumble = () => {
    if(toggle.current){
      toggle.current = !toggle.current
      image2.current.style.width = '0%'
      image2.current.style.scale = 1.1
      image1.current.style.width = '100%'
      image1.current.style.scale = 1
    }else{
      toggle.current = !toggle.current
      image2.current.style.width = '100%'
      image2.current.style.scale = 1
      image1.current.style.width = '0%'
      image1.current.style.scale = 1.1
    }
  }
  return (
    <section className="snap-start h-[100svh] bg-black" onClick={() => rumble()}>
        {/* {useStore.getState().price} */}
        <div ref={wrapper} className='relative w-full h-[100%] duration-1000'>
          <Image ref={image1} src={codingImage} alt={'not math'} className='w-[0%] h-full duration-[1s] right-0 absolute object-cover scale-110 border-l-2 border-white'/>
          <Image ref={image2} src={mathImage} alt={'not math'} fill className='w-[100%] duration-[1s] object-cover border-r-2 border-white'/>
            {/* <OnloadImage src={mathImage} alt={'not math'} priority={true} mask={maskOn}/> */}
        </div>
    </section>
  )
}