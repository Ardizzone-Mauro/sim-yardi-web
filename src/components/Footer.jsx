export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <div className="footer-logo-card">
            <img
              src="/assets/sim-yardi-logo-footer.webp"
              alt="SIM-YArdi — Hemodinamia, ventilación asistida y soporte vital avanzado"
              className="footer-logo"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p>
            Simulación clínica modular aplicada a la formación en medicina
            crítica.
          </p>
        </div>
        <div>
          <span className="footer-label">Secciones</span>
          <a href="#proyecto">Proyecto</a>
          <a href="#arquitectura">Arquitectura</a>
          <a href="#publicaciones">Publicaciones</a>
        </div>
        <div>
          <span className="footer-label">Contacto</span>
          <a href="mailto:contacto@sim-yardi.com">contacto@sim-yardi.com</a>
          <span>Argentina</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} SIM-YArdi</span>
        <span>Innovación argentina al servicio de la educación.</span>
      </div>
    </footer>
  );
}
