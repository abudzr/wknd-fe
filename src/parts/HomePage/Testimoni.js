import React, { useEffect } from "react"

// import redux
import { useDispatch, useSelector } from "react-redux";
import { getTestimoni } from "../../configs/Redux/action/testimoni"

// import package
import Carousel from "react-elastic-carousel";
import Item from "./Item"

// import picture
import lego from "../../assets/img/lego-2.png"

// import css
import "../../assets/css/testimoni.css"


const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2.5, itemsToScroll: 2, pagination: false },
    { width: 768, itemsToShow: 2.5, pagination: false },
    { width: 1200, itemsToShow: 2.5, pagination: false }
];

function Testimoni() {
    // redux
    const dispatch = useDispatch();
    const { testimoni } = useSelector((state) => state.testimoni);

    useEffect(() => {
        dispatch(getTestimoni())
    }, [dispatch]);

    return (
        <>
            <div className="definition">
                <div className="float-right">
                    <img src={lego} width="159" height="158" alt="lego" />
                </div>
                <p className="text-definition"><span>Definition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
                <p className="text-quote">-weekend team</p>
                <div className="circle"></div>
                <h2 className="mt-5 testimoni">Testimonial</h2>
                <div className=" carousel-wrapper">
                    <Carousel
                        breakPoints={breakPoints}
                    >
                        {testimoni.data.map((item) => (
                            <Item key={item.id}>
                                <div className="carousel-testimoni">
                                    <h2>{item.by}</h2>
                                    <p>{item.testimony}</p>
                                </div>
                            </Item>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className="pov">
                <h2 >POV</h2>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
        </>
    )
}

export default Testimoni