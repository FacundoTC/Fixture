const backgrounds = {
  fixture: 'linear-gradient(135deg, #0a1628 0%, #1a2a3a 50%, #0d1f2d 100%)',
  map: 'linear-gradient(135deg, #0b1a2e 0%, #1c3a5a 50%, #0d2137 100%)',
  bracket: 'linear-gradient(135deg, #1a0f0a 0%, #3a2a1a 50%, #2a1a0a 100%)',
  about: 'linear-gradient(135deg, #0f1a0f 0%, #1a2a1a 50%, #0f1a0f 100%)',
}

function BackgroundImage({ page }) {
  return <div className="bg-layer" style={{ background: backgrounds[page] || backgrounds.fixture }} />
}

export default BackgroundImage
