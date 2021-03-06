import React, { useContext, useEffect, useRef } from 'react'
import Sort from '../componets/Sort.js';
import useScroll from '../hook/useScroll'
import { Context } from '../context/Context.js';
import { api1, api2, api3 } from '../config.js';


export default function Gallery() {
    const api = api1
    const { counter, setarrPhotos, setCounter } = useContext(Context)



    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?client_id=${api}&count=30`, {
            headers: {
                'Accept-Version': ' v1'
            }
        })
            .then(res => res.json())
            .then(data => {
                setarrPhotos(data)
            })
    }, [])



    // род. блок
    const parentRef = useRef();
    // доч. блок
    const childRef = useRef();
    // наш наблюдатель
    const intersected = useScroll(parentRef, childRef, () => {
        fetch(`https://api.unsplash.com/photos/random?client_id=${api}&count=30`, {
            headers: {
                'Accept-Version': ' v1'
            }
        })
            .then(res => res.json())
            .then(data => {
                setCounter(counter + 10)
                setarrPhotos(data)
            })
    })

    return (
        <div className="gallery">
            <Sort parenBlock={parentRef} childBlock={childRef} />
        </div>
    )
}
