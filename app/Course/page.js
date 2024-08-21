import React from 'react'


import course1 from "@/public/img/course1.png"
import course2 from "@/public/img/course2.png"
import course3 from "@/public/img/course3.png"
import CourseCard1 from '@/app/component/courseCard-1/CourseCard1'
import CourseCard2 from '@/app/component/courseCard-2/CourseCard2'
import Link from 'next/link'
import Header from '../component/headerCard/Header'

export default function page() {
    return (
        <div>
            <Header tital="OUR COURSES" />
            <section class="course">
                <h1>Course We Offer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div class="row">
                    <div class="course-col">
                        <CourseCard1 tital="Undergraduate Programs" />
                    </div>
                    <div class="course-col">
                        <CourseCard1 tital="Graduate Programs" />
                    </div>
                    <div class="course-col">
                        <CourseCard1 tital="Adult Learning & Degree Completion" />
                    </div>
                </div>
            </section>

            <section class="facilities">
                <h1>Best Courses</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div class="row">
                    <div class="facilities-col">
                        <CourseCard2 tital="Web Development" Image={course1} />
                    </div>
                    <div class="facilities-col">
                        <CourseCard2 tital="Artificial Intelligence" Image={course2} />

                    </div>
                    <div class="facilities-col">
                        <CourseCard2 tital=">Data Science" Image={course3} />

                    </div>
                </div>
            </section>

        </div>
    )
}
