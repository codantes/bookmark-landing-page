import React from 'react';
import DownloadCards from './DownloadCards';

function Downloads() {
    return(
        <section className="downloads">
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
    )
}

export default Downloads;