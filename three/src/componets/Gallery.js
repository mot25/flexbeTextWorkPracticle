import React, { useContext, useEffect, useRef, useState } from 'react'
import Sort from './Sort.js';
import { j1, j2 } from './j.js'
import useScroll from '../hook/useScroll'
import { Context } from '../context/Context.js';
import { api1, api2 } from '../config.js';


export default function Gallery() {
    // const [arrPhotos, setarrPhotos] = useState([])
    const api = api2
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
                console.log('data', data)
                setarrPhotos(data)
                console.log('arrPhotos', arrPhotos)
            })
    }, [])
    // console.log('arrPhotos', arrPhotos)

    const [arr, setArr] = useState(j1)


    // род. блок
    const parentRef = useRef();
    // доч. блок
    const childRef = useRef();
    // наш наблюдатель
    const intersected = useScroll(parentRef, childRef, () => {
        console.log('funn')
    })





    return (
        <div className="gallery">
            <button onClick={() => {
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
            }}>send</button>


            <Sort parenBlock={parentRef} childBlock={childRef} />
        </div>
    )
}
