import React, { useRef, useState } from 'react'

export default function Sort({ arr }) {

    console.log('arr', arr)

    const [arr1, setarr1] = useState([354, 3456, 43632456324, 354, 3456, 43632456324, 354, 3456, 43632456324, 345624256,])
    const [arr2, setarr2] = useState([3456, 63456, 3456345, 43])
    const [arr3, setarr3] = useState([354, 3456, 43632456324, 354, 3456, 43632456324, 354, 3456, 43632456324, 345624256,])
    
    
    arr.forEach((el, i) => {
        if (i % 3 === 0) {
            setarr2([arr2, el])     
        }
    });
    console.log('arr1', arr1);
    
    console.log('arr2', arr2);
    
    console.log('arr3', arr3);


    return (
        <div className="container_gallery">
            <div className="rowAroundEdges" >
                {arr1.map((item, id) => {
                    return <div key={id}>1</div>
                })}
            </div>

            <div className="rowCenter">
                {arr2.map((item, id) => {
                    return <div key={item.id}>2</div>
                })}
            </div>

            <div className="rowAroundEdges" >
                {arr3.map((item, id) => {
                    return <div key={id}>3</div>
                })}
            </div>
        </div>
    )
}

