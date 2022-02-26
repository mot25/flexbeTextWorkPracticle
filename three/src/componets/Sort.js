import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../context/Context'

export default function Sort({ parenBlock, childBlock }) {

    const { counter, arrPhotos } = useContext(Context)



    const [arr1, setarr1] = useState([])
    const [arr2, setarr2] = useState([])
    const [arr3, setarr3] = useState([])
    // const [counter, setCounter] = useState(0)

    useEffect(() => {

        console.log('rgeefgser', 0 + counter);
        setarr1([...arr1, ...[...arrPhotos].splice(0 + counter, 4)])
        setarr2([...arr2, ...[...arrPhotos].splice(4 + counter, 2)])
        setarr3([...arr3, ...[...arrPhotos].splice(6 + counter, 4)])
    }, [arrPhotos])


    console.group();
    console.log('arr1', arr1)
    console.log('arr2', arr2)
    console.log('arr3', arr3)
    console.groupEnd();




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
                <div ref={childBlock}>drf</div>
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

