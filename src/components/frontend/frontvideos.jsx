import { useEffect, useState } from "react";
import { getFrontendVideos } from "../../api/videos";
import './frontvideos.css';
import Modal from "../modal";
import Card from "../Card";

export default function Frontvideos() {
    

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null); // Estado para el video seleccionado

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const frontVideos = await getFrontendVideos();
                setVideos(frontVideos);
            } catch (error) {
                console.error('Error fetching videos:', error);
            } finally {
                setIsLoading(false); // Asegurarse de que la carga se complete
            }
        };
        
        fetchVideos();
    }, []);

    const handleEditClick = (video) => {
        setSelectedVideo(video); // Guardar el video seleccionado
        setIsModalOpen(true); // Abrir el modal
    };

    const handleDeleteClick = (video) => {
        // Implementar lógica de eliminación aquí
        console.log('Deleting video:', video);
    };

    const closeModal = () => {
        setIsModalOpen(false); // Cerrar el modal
        setSelectedVideo(null); // Limpiar el video seleccionado
    };
return(
    <div className="container-front">
        <div className="section-title front-title">
            FRONT END
        </div>
        <section className="section-front">
         {isLoading ? (
                    <p>Cargando videos...</p> // Mostrar mensaje de carga mientras se obtienen los videos
                ) : (
                    videos.length > 0 ? (
                        videos.map((video, index) => (
                            <Card 
                                key={index} 
                                video={video} 
                                onEditClick={handleEditClick} 
                                onDeleteClick={handleDeleteClick}
                            />
                        ))
                    ) : (
                        <p>No se encontraron videos.</p> // Mostrar mensaje si no hay videos
                    )
                )}

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                selectedVideo={selectedVideo}
            />
                </section>
    </div>
    )
}
