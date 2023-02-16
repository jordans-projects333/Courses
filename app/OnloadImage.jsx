'use client'
import { useStore } from '../src/store'
import { useRef } from 'react'
import Image from 'next/image'

const OnloadImage = ({src, alt, priority, mask}) => {
    const { price } = useStore()
    let blurImage = useRef(null)
    let mainImage = useRef(null)
    const blurImageLoaded = () => {
        console.log('what')
        useStore.setState((state) => ({
            imagesLoaded: state.imagesLoaded + 1
        }))
    }
    const mainImageLoaded = () => {
        console.log('not this')
        requestAnimationFrame(() => {
            mainImage.current.style.opacity = 1
        })
        setTimeout(() => {
            blurImage.current.remove()
        }, 150)
    }
    return (
    <>
        <Image ref={blurImage} src={src} alt={alt} priority={!priority} quality={1} fill className='blur-sm object-cover' onLoadingComplete={() => blurImageLoaded()}/>
        <Image ref={mainImage} src={src} alt={alt} priority={!priority} fill className={`opacity-0 object-cover object-right duration-500 mask scale-110`} onLoadingComplete={() => mainImageLoaded()}/>
    </>
    )
}

export default OnloadImage