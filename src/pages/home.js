import React from "react"
import { Footer, Navbar } from "../components"
import HelpTips from "../parts/HomePage/HelpTips"
import Hero from "../parts/HomePage/Hero"
import Testimoni from "../parts/HomePage/Testimoni"

function home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Testimoni />
            {/* <HelpTips /> */}
            <Footer />
        </>
    )
}

export default home