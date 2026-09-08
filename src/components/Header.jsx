import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['#proyecto', 'Proyecto'],
  ['#arquitectura', 'Arquitectura'],
  ['#aplicaciones', 'Aplicaciones'],
  ['#publicaciones', 'Publicaciones'],
  ['#galeria', 'Galería'],
  ['#contacto', 'Contacto']
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#inicio" className="brand" aria-label="SIM-YArdi - inicio">
          <span className="brand-logo-shell" aria-hidden="true">
            <img
              src="/assets/sim-yardi-mark-navbar.webp"
              alt=""
              className="brand-logo"
              width="52"
              height="52"
            />
          </span>
          <span className="brand-copy">
            <strong>SIM-YArdi</strong>
            <small>Simulación en medicina crítica</small>
          </span>
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Navegación principal">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-pill" href="#contacto" onClick={() => setOpen(false)}>Conocer más</a>
        </nav>
      </div>
    </header>
  )
}
