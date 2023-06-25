import React from 'react';
import Logo from '../../../../assets/Logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 min-h-screen">
            <div>
                <img src={Logo} alt="" className="w-40" />
                <p className="text-2xl">
                    By using this website, you understand the information being presented is <br /> provided for informational purposes only and agree to our Terms of Use and <br /> Privacy Policy. Get More Students relies on information from various sources, <br /> including clients and third parties, but cannot guarantee the accuracy and <br /> completeness of that information.
                </p>
                <Link to='https://www.termsfeed.com/live/2c8492f0-c2a' className='font-bold underline'>Privacy Policy</Link>
            </div>

        </footer>
    );
};

export default Footer;