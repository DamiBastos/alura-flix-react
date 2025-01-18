import { useEffect, useState } from "react";
import { getBackendVideos } from "../../api/videos";
import './backendvideos.css';
import Modal from "../modal";
import Card from "../Card";

export default function Backvideos() {

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null); // Estado para el video seleccionado

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const frontVideos = await getBackendVideos();
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
    <div className="contaiback">
        <div className="section-title back-title">
            BACK END
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
