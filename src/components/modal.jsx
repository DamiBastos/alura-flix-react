/* eslint-disable react/prop-types */

export default function Modal({ isOpen, onClose, selectedVideo }) {
  if (!isOpen) return null; // No renderizar el modal si no está abierto

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Editar Video</h2>
        <form>
          <span>Titulo</span>
          <input type="text" placeholder="Titulo" defaultValue={selectedVideo?.title} />
          <span>Categoria</span>
          <input type="text" placeholder="Categoria" defaultValue={selectedVideo?.category} />
          <span>Link</span>
          <input type="text" placeholder="Link" defaultValue={selectedVideo?.link} />
          <span>Imagen</span>
          <input type="text" placeholder="Imagen" defaultValue={selectedVideo?.imagen} />
          <span>Video</span>
          <input type="text" placeholder="Video" defaultValue={selectedVideo?.video} />
          <span>Descripción</span>
          <textarea placeholder="Descripción" defaultValue={selectedVideo?.description}></textarea>
          <div>
            <button type="submit">Guardar</button>
            <button type="button" onClick={onClose}>Limpiar</button>
          </div>
        </form>
        <button className="boton-cerrar" onClick={onClose}>
          <i className="fa-regular fa-circle-xmark 2xl"></i>
        </button>
      </div>
    </div>
  );
}
