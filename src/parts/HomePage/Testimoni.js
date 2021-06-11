import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getTestimoni } from "../../configs/Redux/action/testimoni"
import lego from "../../assets/img/lego-2.png"

// import css
import "../../assets/css/testimoni.css"
function Testimoni() {
    // redux
    const dispatch = useDispatch();

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
            </div>
        </>
    )
}

export default Testimoni