import { useEffect, useState } from 'react';
import { getFrontendVideoBanner } from '../api/videos'; // Ajusta la ruta si es necesario

import './banner.css';

export default function Banner() {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchBannerVideo = async () => {
            const bannerVideo = await getFrontendVideoBanner();
            setVideo(bannerVideo);
        };

        fetchBannerVideo();
    }, []);

    return (
        <div className="container-banner">
            {video ? (
                <div className="banner-content">
                    <div className='content-text'>
                    <h1>{video.sector}</h1>
                    <h2>{video.title}</h2>
                    <p>{video.description}</p>
                    </div>
                    
                    <img src={`/img/${video.imagen}`} alt={video.title}></img>
                </div>
            ) : (
                <p>Loading...</p> // Puedes personalizar el contenido mientras carga
            )}
        </div>
    );
}
