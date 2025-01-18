/* eslint-disable react/prop-types */
import { deleteVideo } from "../api/videos";
import "./card.css";

export default function Card({ video, onEditClick, onDeleteClick }) {

  const handleDelete = async () => {
    try {
      await deleteVideo(video.id); // Llama a la función para eliminar el video
      onDeleteClick(video.id); // Llama al callback para actualizar el estado en el componente padre
    } catch (error) {
      console.error("Error deleting video", error);
    }
  };

  
  
  return (
    <div className='video-card'>
      <div className='video'>
        <img src={`/img/${video.imagen}`} alt={video.title} />
      </div>
      <div className="buttons-card">
        <button className="borrar" onClick={() => handleDelete(video)}>
          BORRAR
        </button>
        <button className="editar" onClick={() => onEditClick(video)}>
          EDITAR
        </button>
      </div>
    </div>
  );
}
