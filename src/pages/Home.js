import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Counter from '../components/Counter'
import NavLinks from '../components/NavLinks'

export default function Home() {
    const counter = useSelector((state)=>state.counter)

    return (
        <>
            {counter}
            <br /> 
            Home
            <br /> 
            <Counter />
        </>
    )
}
