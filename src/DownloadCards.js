import React from 'react';

function DownloadCards(props) {
    return(
        <article className='download-card'>
            <img src={props.image} alt="" />
            <h1>Add to {props.name}</h1>
            <p>Minimum version {props.version}</p>
            <button>Add & install Extension</button>
        </article>
    )
}

export default DownloadCards;