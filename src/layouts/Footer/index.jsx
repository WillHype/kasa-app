import React from "react";
import "./_index.scss";
import logoFooter from "../../assets/Logo_footer.svg";

function Footer() {
    return(
        <footer>
            <div className="footer">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;