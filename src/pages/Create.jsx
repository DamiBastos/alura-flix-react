import { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './create.css';
import { postFrontendVideos } from '../api/videos.js';

export default function Create() {
  // Estado para los valores del formulario
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    link: '',
    image: '',
    video: '',
    description: '',
  });

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    postFrontendVideos(formData);
  };

  // Función para limpiar el formulario
  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      link: '',
      image: '',
      video: '',
      description: '',
    });
  };

  return (
    <>
      <Header />
      <div className='create-container'>
        <div className='create-title'>
          <h2>NUEVO VIDEO</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>Crear tarjeta</div>
          <span>Titulo</span>
          <input
            type="text"
            name="title"
            placeholder="Titulo"
            value={formData.title}
            onChange={handleInputChange}
          />
          <span>Categoria</span>
          <input
            type="text"
            name="category"
            placeholder="Categoria"
            value={formData.category}
            onChange={handleInputChange}
          />
          <span>Link</span>
          <input
            type="text"
            name="link"
            placeholder="Link"
            value={formData.link}
            onChange={handleInputChange}
          />
          <span>Imagen</span>
          <input
            type="text"
            name="image"
            placeholder="Imagen"
            value={formData.image}
            onChange={handleInputChange}
          />
          <span>Video</span>
          <input
            type="text"
            name="video"
            placeholder="Video"
            value={formData.video}
            onChange={handleInputChange}
          />
          <span>Descripción</span>
          <textarea
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <div>
            <button type="submit">Guardar</button>
            <button type="button" onClick={handleClear}>Limpiar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
