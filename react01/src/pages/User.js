import React, { useState, useEffect } from 'react'
//hooks

export default function User() {
    // const data = new Date();
    const [data, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(timer)
    })
    return (
        <div>
            <h1>我是User</h1>
            <p>{data.toLocaleString()}</p>
        </div>
    )
}
