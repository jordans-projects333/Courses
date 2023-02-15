import {create } from 'zustand'

export const useStore = create((set) => ({
    name: 'harry',
    price: 0,
    imagesLoaded: 0
}
))