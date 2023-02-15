import mathImage from './images/coding.webp'
import OnloadImage from './OnloadImage'

export default function Course1(){
    return (
      <section className="snap-start h-[100%]">
        <div className='relative w-full h-[100%] bg-black'>
            <OnloadImage src={mathImage} alt={'not math'} priority={true}/>
        </div>
    </section>
    )
  }