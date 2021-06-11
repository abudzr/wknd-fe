import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getHelpAndTips } from '../../configs/Redux/action/helpAndTips'

// import css
import "../../assets/css/helpandtips.css"
import { Button } from '../../components';

// import picture
import lego from "../../assets/img/lego-3.png"

function HelpTips() {
    // redux
    const dispatch = useDispatch();
    const { helpTips } = useSelector((state) => state.helpTips);

    useEffect(() => {
        dispatch(getHelpAndTips())
    }, [dispatch]);

    return (
        <>
            <div className="help-tips">
                <h2>Resource</h2>
                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
                <h2 className="pt-5">Help & Tips</h2>
                <div className="container">
                    <div className="row">
                        {helpTips.data.map((item) => (
                            <div className="col-lg-4 col-12" key={item.id} >
                                <div className="card-help" >
                                    <img src={item.image} width="311" height="176" alt="help and tips" />
                                    <div className="rectangle-card-help">
                                        <div className="d-flex">
                                            <span>{item.title}</span>
                                            <Button btn="arrow" title={<i className="fa fa-arrow-right" />} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-5 mb-3">
                    <h2>You’re all set.</h2>
                    <p>The wise man therefore always holds in these matters to this principle of selection.</p>
                </div>
                <img src={lego} width="244" height="325" alt="lego" />
            </div>
        </>
    )
}

export default HelpTips