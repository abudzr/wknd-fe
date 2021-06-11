import React from "react"

// css
import "../../assets/css/home.css"

// import picture
import bgHome from "../../assets/img/bg-headline.png"
import lego from "../../assets/img/lego.png"

// import button
import { Button } from "../../components"

function Hero() {
    const handleClickLetsGo = () => {
        window.scrollTo({ top: 800, behavior: "smooth" })
    }

    return (
        <>
            <div className="hero">
                <img src={bgHome} className="bgHome" alt="bg-home" />
                <h1 className="title-hero">WEEKEND FROM HOME</h1>
                <p className="subtitle-hero">Stay active with a little workout.</p>
                <img src={lego} className="lego" width="184" height="305" alt="lego" />
                <Button
                    btn="letsgo"
                    title="Let’s Go"
                    onClick={handleClickLetsGo}
                />
            </div>
        </>
    )
}

export default Hero