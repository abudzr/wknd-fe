import { React } from "react";
import "../../assets/css/footer.css"

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container d-flex justify-content-between">
                    <p className="footer-title">wknd@<span>2021</span></p>
                    <p className="version">alpha version 0.1</p>
                </div>
            </div>
        </>
    )
}
export default Footer;