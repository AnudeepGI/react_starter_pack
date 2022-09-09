import React from 'react'
import { useSelector } from 'react-redux'

export default function About() {
    const counter = useSelector((state)=>state.counter)

    return (
        <><br />{counter}<br /> 
        About</>
    )
}
