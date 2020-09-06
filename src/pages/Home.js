import React from 'react';
import '../App.css'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Card'
import Footer from '../components/Footer'

function Home () {
    return (
        <>
        <HeroSection/>
        <Cards/>
        <Footer/>
        </>
    )
}

export default Home;