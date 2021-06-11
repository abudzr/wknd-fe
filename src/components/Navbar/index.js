import { React } from "react";
import "../../assets/css/navbar.css"
import pictureProfile from "../../assets/img/profile.png"

function Navbar() {
    return (
        <>
            <div className="rectangle">
                <div className="container">
                    <div className="d-flex">
                        <img src={pictureProfile} width="33" height="33" alt="profile" />
                        <div className="ml-3 nav-text">
                            <p className="nav-title">Good Moring</p>
                            <p className="nav-subtitle">Fellas</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;