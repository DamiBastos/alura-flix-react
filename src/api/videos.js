async function getFrontendVideos() {
    try {
        const response = await fetch('http://localhost:3000/videos');
        const data = await response.json();
        return data.filter(video => video.sector === 'frontend');
    } catch (error) {
        console.error('Error fetching frontend videos:', error);
    }
}

async function getBackendVideos() {
    try {
        const response = await fetch('http://localhost:3000/videos');
        const data = await response.json();
        return data.filter(video => video.sector === 'backend');
    } catch (error) {
        console.error('Error fetching backend videos:', error);
    }
}

async function getInnovaVideos() {
    try {
        const response = await fetch('http://localhost:3000/videos');
        const data = await response.json();
        return data.filter(video => video.sector === 'gestion-innovacion');
    } catch (error) {
        console.error('Error fetching backend videos:', error);
    }
}

async function getFrontendVideoBanner() {
    try {
        const response = await fetch('http://localhost:3000/videos');
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching frontend videos:', error);
    }
}

async function postFrontendVideos(videos) {
    try {
        const response = await fetch('http://localhost:3000/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videos }) // Solo enviamos los videos sin la categoría, ya que siempre es frontend
        });

        const data = await response.json();
        console.log('Videos de frontend enviados con éxito:', data);
        return data; // Retornamos la respuesta del servidor
    } catch (error) {
        console.error('Error al enviar los videos de frontend:', error);
    }
}

// Función para eliminar un video con fetch
const deleteVideo = async (videoId) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${videoId}`, {
        method: 'DELETE', // Método DELETE para eliminar
      });
  
      if (!response.ok) {
        throw new Error('Error deleting video');
      }
  
      return await response.json(); // Devolver la respuesta del servidor
    } catch (error) {
      console.error('Error deleting video:', error);
      throw error; // Lanzar el error para que pueda ser manejado donde se llame
    }
  };
  
  // Función para actualizar un video con fetch
  const updateVideo = async (videoId, updatedVideo) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${videoId}`, {
        method: 'PUT', // Método PUT para actualizar
        headers: {
          'Content-Type': 'application/json', // Indicamos que estamos enviando JSON
        },
        body: JSON.stringify(updatedVideo), // Datos actualizados convertidos en JSON
      });
  
      if (!response.ok) {
        throw new Error('Error updating video');
      }
  
      return await response.json(); // Devolver la respuesta del servidor
    } catch (error) {
      console.error('Error updating video:', error);
      throw error; // Lanzar el error para que pueda ser manejado donde se llame
    }
  };

export { 
    getFrontendVideos,
    getBackendVideos, 
    getInnovaVideos, 
    getFrontendVideoBanner, 
    postFrontendVideos,
    updateVideo,
    deleteVideo
};