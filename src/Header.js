import React from 'react';

function Header() {
    const [menuToggle, setMenuToggle] = React.useState(false);
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

    function menuSwitch() {
        setMenuToggle(!menuToggle);
    }

    React.useEffect(() => {
        
        function changeWidth() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);
    }, [])

    return(
        <header>
        <nav className='topnav'>
            <img className='top-logo' src="./images/logo-bookmark.svg" alt="" />
            {
                ((menuToggle)||(screenWidth > 900)) && 
            <ul className='main-menu'>
                <li className='menu-header'>
                        <img className='menu-close-icon' onClick={menuSwitch} src="./images/icon-close.svg" alt="" />
                </li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
                <li className='menu-login-btn'><a href="#"><button>Login</button></a></li>
            </ul>
            }
            <img className='menu-btn' onClick={menuSwitch} src="./images/icon-hamburger.svg" alt="" />
        </nav>

        <section className='hero-banner'>
            <img src="./images/illustration-hero.svg" alt="" />
            <article>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.</p>
                <section className='option-btn'>
                <button id='hero-chrome-btn'>Get it on Chrome</button>
                <button id='hero-firefox-btn'>Get in on Firefox</button>
                </section>
            </article>


        </section>
        </header>
    )
}

export default Header;