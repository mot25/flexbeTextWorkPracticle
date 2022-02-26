import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'

export default function Sort({ parenBlock, childBlock }) {

    const { counter, arrPhotos } = useContext(Context)

    const [arr1, setarr1] = useState([])
    const [arr2, setarr2] = useState([])
    const [arr3, setarr3] = useState([])

    useEffect(() => {
        setarr1([...arr1, ...[...arrPhotos].splice(0 + counter, 12)])
        setarr2([...arr2, ...[...arrPhotos].splice(12 + counter, 6)])
        setarr3([...arr3, ...[...arrPhotos].splice(18 + counter, 12)])
    }, [arrPhotos])






    return (
        <div ref={parenBlock} className="container_gallery">
            <div className="rowAroundEdges" >
                {arr1.map((item, id) => {
                    return <div style={{ backgroundColor: item.color }} key={item.id + id + counter + Date.now()}>
                        <img className='img_gallary' src={item.urls.small} />
                    </div>
                })}
            </div>
            <div className="rowCenter">
                {arr2.map((item, id) => {
                    return <div style={{ backgroundColor: item.color }} key={item.id + id + counter + Date.now()}>
                        <img className='img_gallary' src={item.urls.small} />
                    </div>
                })}
                <div className='mark' ref={childBlock}></div>

            </div>
            <div className="rowAroundEdges" >
                {arr3.map((item, id) => {
                    return <div style={{ backgroundColor: item.color }} key={item.id + id + counter + Date.now()}>
                        <img className='img_gallary' src={item.urls.small} />
                    </div>
                })}
            </div>
        </div>

    )
}

