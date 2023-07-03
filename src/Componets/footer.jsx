// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/footer.css"
import { IconButton } from "@mui/material";
import {Facebook, Instagram, Twitter, YouTube} from "@mui/icons-material";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__text">© 2023 DevsCode. Todos los derechos reservados.</p>
                <div className="footer__social-icons">
                    <IconButton href="#" className="footer__social-icon">
                        <Facebook />
                    </IconButton>
                    <IconButton href="#" className="footer__social-icon">
                        <Instagram />
                    </IconButton>
                    <IconButton href="#" className="footer__social-icon">
                        <Twitter />
                    </IconButton>
                    <IconButton href="#" className="footer__social-icon">
                        <YouTube />
                    </IconButton>
                </div>
            </div>
        </footer>
    )
}

export default Footer;