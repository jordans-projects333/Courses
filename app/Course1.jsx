import mathImage from './images/coding.webp'
import OnloadImage from './OnloadImage'

export default function Course1(){
    return (
      <section className="snap-start h-[100lvh]">
        <div className='relative w-full h-[100%] bg-green-500 overflow-y-auto'>
            <OnloadImage src={mathImage} alt={'not math'} priority={true}/>
            <div className='h-[400vh]'>hi</div>
        </div>
    </section>
    )
  }