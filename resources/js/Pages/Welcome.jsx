import React, { useEffect } from 'react';
import Brands from '../components/Frontend/Brands';
import Projects from '../components/Frontend/Projects';
import Testimonial from '../components/Frontend/Testimonial';
import Hero from '../components/Frontend/Hero';
import About from '../components/Frontend/About';
import Service from '../components/Frontend/Service';
import HomePagdData from '../data/HomePagdData.json';
import Experience from '../components/Frontend/Experience';
import Contact from '../components/Frontend/Contact';
import {Head} from "@inertiajs/react";
import FrontendLayout from "@/Layouts/FrontendLayout.jsx";

export default function Home() {
    const {
        hero,
        socialBtns,
        brands,
        about,
        projects,
        service,
        experience,
        testimonial,
        contact,
    } = HomePagdData;
    return (
        <FrontendLayout>
            <Head title="Md Iqbal Hossan - Web Application Developer" />
            <Hero data={hero} socialData={socialBtns} />
            <About data={about} />
            <Projects data={projects} />
            <Service data={service} />
            <Experience data={experience} />
            <Testimonial data={testimonial} />
            <Contact data={contact} socialData={socialBtns} />
        </FrontendLayout>
    );
}
