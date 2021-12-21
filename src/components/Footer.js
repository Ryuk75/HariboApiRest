import twitter from '../img/iconos/twitter.png'
import facebook from '../img/iconos/facebook.png'
import instagram from '../img/iconos/instagram.png'
import gummyBlack from '../img/gummyBlack.png'
import React from 'react'

const Footer = () => {
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <img className="bi" src={gummyBlack} alt='log' width="24" height="24" />
            </a>
            <span className="text-muted">&reg; 2021 Haribo Gummies. Miami, Fl</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <a className="text-muted" href="none">
                    <img className="bi" src={facebook} alt='facebook' width="24" height="24" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" href="none">
                    <img className="bi" src={instagram} alt='instagram' width="24" height="24" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" href="none">
                    <img className="bi" src={twitter} alt='twitter' width="24" height="24" />
                </a>
            </li>
        </ul>
        </footer>
    );
}
export default Footer;
