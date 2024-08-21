import React from 'react'
import Image from 'next/image'
import Campus1 from "@/public/img/Campus1.png"
import Campus2 from "@/public/img/Campus2.png"
import Campus3 from "@/public/img/Campus3.png"
import libary from "@/public/img/libary.png"
import playground from "@/public/img/playground.png"
import food from "@/public/img/food.png"
import user from "@/public/img/user.png"
import Card1 from "@/app/component/homePageCard-1/Card1"
import Card2 from "@/app/component/homePageCard-2/Card2"
import Link from 'next/link'
import Navbar from './component/navbar/Navbar'

export default function Home() {
  return (
    <div>
      <section className="header">
        <Navbar />

        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
      </section>
      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <Card1 />
          </div>
          <div className="course-col">
            <Card1 />
          </div>
          <div className="course-col">
            <Card1 />
          </div>
        </div>
      </section>

      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="campus-col">
            <Image src={Campus1}
              alt=""
            />
            <div className="layer">
              <h3>Islamabad</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image src={Campus2}
              alt=""
            />
            <div className="layer">
              <h3>Faisalabad</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image src={Campus3}
              alt=""
            />
            <div className="layer">
              <h3>Karachi</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <Card2 tital="Best Libary" img={libary} />
          </div>
          <div className="facilities-col">
            <Card2 tital="Athletics" img={playground} />
          </div>
          <div className="facilities-col">
            <Card2 tital="Tasty and Healthy Food" img={food} />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="testimonials-col">
            <Image src={user}
              alt=""
            />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.</p>
              <h3>Student Name</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="testimonials-col">
            <Image src={user}
              alt=""
            />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.</p>
              <h3>Student Name</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/Contect" className="hero_btn">CONTACT US</Link>
      </section>
    </div>
  );
}
