import React, { useEffect, useState } from 'react'
import { j1, j2 } from './j.js'
export default function Gallery() {
    useEffect(() => {
        console.log(j1);
        // fetch('https://api.unsplash.com/photos/random?client_id=VfnjeOK9sGoIJmD98BMVhOa30mZQJ7AYyzdCTiMSlRw&count=10', {
        //     headers: {
        //         'Accept-Version': ' v1',
        //         // 'Access-Key': 'VfnjeOK9sGoIJmD98BMVhOa30mZQJ7AYyzdCTiMSlRw',
        //         // 'Secret-key': 'DrGPuFKC-JjJ1czxvYXPdn9HgYzffTheyzR9hjdwIg4'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }, [])
    const [arrPhotos, setarrPhotos] = useState([])
    console.log('arrPhotos', arrPhotos)
    return (
        <div className="gallery">

        </div>
    )
}
