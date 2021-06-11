import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getHelpAndTips } from '../../configs/Redux/action/helpAndTips'

function HelpTips() {
    // redux
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHelpAndTips())
    }, [dispatch]);

    return (
        <>
            <h1>help And Tips</h1>
        </>
    )
}

export default HelpTips