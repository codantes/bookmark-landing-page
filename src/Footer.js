import React from 'react';

function Footer() {
    return(
        <footer>
            <nav>
                <ul className='footer-nav'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <article className="socials">
                    <img src="./images/icon-facebook.svg" alt="" />
                    <img src="./images/icon-twitter.svg" alt="" />
                </article>

            </nav>
        </footer>
    )
}

export default Footer;