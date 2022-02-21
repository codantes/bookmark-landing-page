import React from 'react';
import DownloadCards from './DownloadCards';

function Downloads() {
    return(
        <section className="downloads">
            <article>
                <h1>Download the extension</h1>
                <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.</p>
            </article>
            <section className="cards">
            <DownloadCards 
                image = "/images/logo-chrome.svg"
                name = "chrome"
                version = "62"
            />

            <DownloadCards 
                image = "/images/logo-firefox.svg"
                name = "Chrome"
                version = "55"
            />

            <DownloadCards 
                image = "/images/logo-opera.svg"
                name = "Firefox"
                version = "46"
            />
            </section>
        </section>
    )
}

export default Downloads;