import React from 'react'
import { useDispatch } from 'react-redux';

export default function Counter() {
    const dispatch = useDispatch();
    const increament = () => dispatch({type:'INC'});
    const decreament = () => dispatch({type:'DEC'});
    const addTen = () => dispatch({type:'ADDTEN',payload:10});

    return (
        <div>
            <button onClick={increament}>Increase</button>
            <button onClick={decreament}>Decrease</button> <br/>
            <button onClick={addTen}>Add by 10</button> <br/>
        </div>
    )
}
