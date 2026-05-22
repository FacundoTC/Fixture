const images = [
  { id: 1, url: 'https://picsum.photos/seed/1/400/300', title: 'Naturaleza' },
  { id: 2, url: 'https://picsum.photos/seed/2/400/300', title: 'Ciudad' },
  { id: 3, url: 'https://picsum.photos/seed/3/400/300', title: 'Arquitectura' },
  { id: 4, url: 'https://picsum.photos/seed/4/400/300', title: 'Paisaje' },
  { id: 5, url: 'https://picsum.photos/seed/5/400/300', title: 'Retrato' },
  { id: 6, url: 'https://picsum.photos/seed/6/400/300', title: 'Abstracto' },
  { id: 7, url: 'https://picsum.photos/seed/7/400/300', title: 'Atardecer' },
  { id: 8, url: 'https://picsum.photos/seed/8/400/300', title: 'Mar' },
  { id: 9, url: 'https://picsum.photos/seed/9/400/300', title: 'Montaña' },
]

function Gallery() {
  return (
    <main className="gallery">
      <h1>Galería</h1>
      <p className="subtitle">Explorá nuestra colección de imágenes</p>
      <div className="grid">
        {images.map((img) => (
          <div key={img.id} className="grid-item">
            <img
              src={img.url}
              alt={img.title}
              loading="lazy"
              width={400}
              height={300}
            />
            <span className="grid-label">{img.title}</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Gallery
