import React, { useContext, useEffect, useRef, useState } from 'react'
import Sort from './Sort.js';
import useScroll from '../hook/useScroll'
import { Context } from '../context/Context.js';
import { api1, api2 } from '../config.js';


export default function Gallery() {
    // const [arrPhotos, setarrPhotos] = useState([])
    const api = api1
    const { counter, arrPhotos, setarrPhotos, setCounter } = useContext(Context)
    console.log('arrPhotos', arrPhotos)
    console.log('counter', counter)



    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?client_id=${api}&count=10`, {
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
        fetch(`https://api.unsplash.com/photos/random?client_id=${api}&count=10`, {
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
