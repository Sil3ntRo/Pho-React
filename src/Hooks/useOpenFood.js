import {useState} from 'react'

export function useOpenFood() {
    const [openFood, setFoodOpen] = useState();

    return {
        openFood,
        setFoodOpen
    }
}