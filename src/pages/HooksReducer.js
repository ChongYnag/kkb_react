import React, { useEffect, useReducer, useState } from 'react'
import FruitList from "../components/FruitList";

function friutsReducer(state, action) {
    switch (action.type) {
        case "init":
        case "replace":
            return action.payload;
        case "add": return [...state, action.payload]
        default:
            return state;
    }
}

export default function HooksReducer() {
    const [fruist, dispatch] = useReducer(friutsReducer, []);
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "init", payload: ["apple", "banana"] })
        }, 1000);
        console.log(fruist)
        return () => { }
    }, [])
    return (
        <div>
            HooksReducer
            <FruitList fruist={fruist} setFruist={it => {
                dispatch({ type: "replace", payload: it })
            }}></FruitList>
            <Add addItem={it => {
                dispatch({ type: "add", payload: it })
            }} />

        </div>
    )
}


function Add({ addItem }) {
    const [name, setName] = useState("");
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => addItem(name)}>增加</button>
        </div>
    )
};

