'use client'
import { useStore } from '../src/store'
import OnloadImage from './OnloadImage'
import mathImage from './images/table.jpg'
import { useState } from 'react'

export default function Overview(){
  const [maskOn, setMaskOn] = useState(false)
    // useStore.setState({price : 2})
  return (
    <section className="snap-start h-[100%] bg-black" onClick={() => setMaskOn((prev) => !prev)}>
        {/* {useStore.getState().price} */}
        <div className='relative w-full h-[100%]'>
            <OnloadImage src={mathImage} alt={'not math'} priority={true} mask={maskOn}/>
            <div className='fixed left-0 h-full w-[40vw] goon shadow-md z-50'>

            </div>
        </div>
    </section>
  )
}