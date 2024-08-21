import React from 'react'
import Image from 'next/image'
export default function CourseCard2( props) {
    return (
        <div>
            <Image
                src={props.Image}
                alt=""
                />
            <h3>{props.tital}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
        </div>
    )
}
