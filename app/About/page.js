import React from 'react'
import Header from '../component/headerCard/Header'
import Image from 'next/image'
import about from "@/public/img/about.png"

export default function page() {
    return (
        <div>
            <Header tital="ABOUT US" />

            <section class="about-us">
                <div class="row">
                    <div class="about-col">
                        <h1>We are the worlds largest University</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                        <a href="#" class="hero_btn btn">EXPLORE NOW</a>
                    </div>
                    <div class="about-col">
                        <Image
                            src={about}
                            alt=''
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}
