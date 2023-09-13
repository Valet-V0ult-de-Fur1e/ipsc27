import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Sidebar from '../components/navbar/Sidebar'
import CardSection from '../components/cardSection/CardSection'
import DoublePanel from '../components/duelSection/DuelSection'
import CallToAction from '../components/callToAction/CallToAction'
import Services from '../components/services/Services'
import Testimonial from '../components/testimonial/Testimonial'
import PopularCourses from '../components/popularCourses/PopularCourses'
import {course} from '../components/popularCourses/data'
import Footer from '../components/footer/Footer'
import JoinMap from  '../components/joinUs/Join'
import ObjectsList from '../components/Objects/ObjectsWindow'
import { objects } from '../components/Objects/data'
import DocumentsPlates from '../components/documents/DocumentsPlace'
import DocumentsView from '../components/documents_view/DocumentsView'
import ContactInfo from '../components/contactInfo/ContactInfo'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Hero />
        {/* <CardSection /> */}
        {/* <DoublePanel /> */}
        <JoinMap />
        <ObjectsList objects={objects}/>
        <DocumentsPlates />
        <DocumentsView/>
        <ContactInfo/>
        {/* <CallToAction /> */}
        {/* <Services /> */}
        {/* <Testimonial /> */}
        {/* <PopularCourses courses={course} /> */}
        <Footer />
        </>
    )
}

export default Home
