import React, { useState, useEffect } from 'react';
import FruitList from "../components/FruitList";


export default function HooksPage() {
    const [data, setDate] = useState(new Date());
    const [fruist, setFruist] = useState(['apple', 'banana'])
    
    useEffect(() => {
        console.log("useEffect")
        const timerid = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(timerid);
    },[data])

    return (
        <div>
            HooksPage
            <p>{data.toLocaleTimeString()}</p>

            <FruitList fruist={fruist} setFruist={setFruist}></FruitList>
            <Add addItem={item => setFruist([...fruist, item])} />
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

