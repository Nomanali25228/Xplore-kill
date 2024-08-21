import React from 'react'
import Image from 'next/image'
import libary from "@/public/img/libary.png"


export default function Card2(props) {
  return (
    <div>
      <Image src={props.img}
        alt=""
        className="image-pic" />
      <h3>{props.tital}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
      </p>
    </div>
  )
}
