import React, { useEffect, useRef, useState } from 'react'

export default function Sort({ arr }) {

    console.log('arr', arr)

    const [arr1, setarr1] = useState([])
    const [arr2, setarr2] = useState([])
    const [arr3, setarr3] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter(pre => pre + 5)
        setarr1([...arr1, ...[...arr].splice(0 + counter, 4)])
        setarr2([...arr2, ...[...arr].splice(3 + counter, 2)])
        setarr3([...arr3, ...[...arr].splice(5 + counter, 4)])
    }, [arr])











    return (
        <div className="container_gallery">
            <div className="rowAroundEdges" >
                {arr1.map((item, id) => {
                    return <div key={item.id}>
                        <img src={item.urls.small} />
                    </div>
                })}
            </div>

            <div className="rowCenter">
                {arr2.map((item, id) => {
                    return <div key={item.id}>
                        <img src={item.urls.small} />
                    </div>
                })}
            </div>

            <div className="rowAroundEdges" >
                {arr3.map((item, id) => {
                    return <div key={item.id}>
                        <img src={item.urls.small} />
                    </div>
                })}
            </div>
        </div>
    )
}

