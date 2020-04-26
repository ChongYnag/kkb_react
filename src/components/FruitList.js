import React from 'react';
export default function FruitList({ fruist, setFruist }) {
    const delItem = index => {
        const tem = [...fruist]
        tem.splice(index, 1)
        setFruist(tem)
    }
    return (
        <div>
            <ul>
                {
                    fruist.map((it, index) => {
                        return <li onClick={() => delItem(index)} key={it + index}>{it}</li>
                    })
                }
            </ul>
        </div>
    )
}