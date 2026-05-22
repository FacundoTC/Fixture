function About() {
  return (
    <main className="about">
      <h1>Sobre este proyecto</h1>
      <section className="about-content">
        <p>
          Esta aplicación fue desarrollada como una demostración de una
          experiencia web moderna, mobile-first, utilizando React y Vite.
        </p>
        <p>
          El diseño prioriza la usabilidad en dispositivos móviles con
          navegación táctil, tipografía escalable y una cuadrícula de imágenes
          adaptable.
        </p>
        <h2>Tecnologías</h2>
        <ul>
          <li>React 19</li>
          <li>Vite</li>
          <li>React Router</li>
          <li>CSS moderno (Grid, Custom Properties)</li>
        </ul>
      </section>
    </main>
  )
}

export default About
