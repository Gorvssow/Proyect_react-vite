// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/footer.css"
import { IconButton } from "@mui/material";
import FacebookIcon from '../img/Sociales/facebook.png';
import InstagramIcon from '../img/Sociales/instagram.png';
import TwitterIcon from '../img/Sociales/twiter.png';
import YouTubeIcon from '../img/Sociales/youtube.png';
import TikTokIcon from '../img/Sociales/tik-tok.png';

function Footer() {
    return (
        <footer className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="footer__content">
                <p className="footer__text text-white">© 2023 Nervo Estudios. Todos los derechos reservados.</p>
                <div className="flex items-center justify-center">
                    <IconButton href="#" className="footer__social-icon">
                        <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
                    </IconButton>
                    <IconButton href="#" className="footer__social-icon">
                        <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
                    </IconButton>
                    <IconButton href="#" className="footer__social-icon">
                        <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
                    </IconButton>
                    <IconButton href="#" className="footer__social-icon">
                        <img src={YouTubeIcon} alt="YouTube" className="w-6 h-6" />
                    </IconButton>
                    <IconButton href="#" className="footer__social-icon">
                        <img src={TikTokIcon} alt="TikTok" className="w-6 h-6" />
                    </IconButton>
                </div>
            </div>
        </footer>
    );
}
export default Footer;