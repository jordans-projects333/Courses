'use client'
import { useRef, cloneElement, useEffect, useMemo, useState} from "react"

const Main = ({children}) => {
    console.log('rendered')
    let [loaded, setLoaded] = useState(false)
    let allSlideItems = useRef([])
    let main = useRef(null)
    const swipeDetectEnd = () => {
        setLoaded(true)
        // setTimeout(() => {
        // let index = parseInt(calculateIndex())
        // if(!loaded && index == 1)setLoaded(true)
        // console.log(index)
        // },700)
    }
    const addToSlideItems = (el) => {
        if(el && !allSlideItems.current.includes(el)){
            allSlideItems.current.push(el)
        }
    }
    const calculateIndex = () => {
        return main.current.scrollTop / main.current.getBoundingClientRect().height
    }
    let childrenWithRefs = children.map((item, index) => {
        return (
            cloneElement(item, {ref: addToSlideItems, key: index})
        )
    })
    return (
        <main ref={main} className="snap-y snap-mandatory h-full overflow-y-scroll" onTouchEnd={() => swipeDetectEnd()}>
            {childrenWithRefs[0]}
            {childrenWithRefs[1]}
            {(loaded == true) && childrenWithRefs[2]}
            
        </main>
    )
}

export default Main