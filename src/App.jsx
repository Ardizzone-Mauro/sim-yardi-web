import {
  Activity,
  Blocks,
  BrainCircuit,
  CheckCircle2,
  HeartPulse,
  Layers3,
  Microscope,
  Network,
  ShieldCheck,
  Stethoscope,
  Waves,
  ArrowRight,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";
import ArticleCard from "./components/ArticleCard";
import { articles } from "./data/articles";
import { Instagram } from "lucide-react";

const features = [
  {
    icon: <Blocks />,
    title: "Arquitectura modular",
    text: "Componentes independientes e intercambiables que permiten adaptar cada configuración.",
  },
  {
    icon: <Layers3 />,
    title: "Diseño escalable",
    text: "Una base tecnológica preparada para crecer desde escenarios neonatales hasta adultos.",
  },
  {
    icon: <HeartPulse />,
    title: "Alta fidelidad",
    text: "Escenarios orientados a la práctica clínica, el razonamiento y la respuesta del equipo.",
  },
  {
    icon: <ShieldCheck />,
    title: "Entrenamiento seguro",
    text: "Práctica repetible en un entorno controlado, sin riesgo para pacientes.",
  },
];

const modules = [
  [
    "A",
    "Módulo maniquí",
    "Unidad central de interacción clínica y soporte del escenario.",
  ],
  [
    "B",
    "Tablero de mando",
    "Gestión de conexiones, control y variables del sistema.",
  ],
  [
    "C",
    "Impulsión hidráulica",
    "Subsistema pensado para simulación de variables hemodinámicas.",
  ],
  [
    "D",
    "Caja estructural",
    "Contención organizada de módulos, conexiones y cableado.",
  ],
];

const applications = [
  {
    icon: <Waves />,
    title: "Hemodinamia",
    text: "Entrenamiento orientado al reconocimiento y manejo de variables hemodinámicas.",
  },
  {
    icon: <Activity />,
    title: "Ventilación asistida",
    text: "Escenarios compatibles con prácticas vinculadas al soporte ventilatorio.",
  },
  {
    icon: <Stethoscope />,
    title: "Soporte vital avanzado",
    text: "Simulación de escenarios clínicos críticos para práctica individual y en equipo.",
  },
  {
    icon: <BrainCircuit />,
    title: "Formación interdisciplinaria",
    text: "Una plataforma para entrenamiento, debriefing y desarrollo de competencias.",
  },
];

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section id="inicio" className="hero">
          <div className="hero-orbit hero-orbit-a" aria-hidden="true"></div>
          <div className="hero-orbit hero-orbit-b" aria-hidden="true"></div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow light">
                Simulación en medicina crítica
              </span>
              <h1>
                Tecnología para entrenar hoy las decisiones que importan mañana.
              </h1>
              <p className="hero-lead">
                SIM-YArdi es una plataforma argentina de simulación clínica
                modular, diseñada para entrenamiento en hemodinamia, ventilación
                asistida y soporte vital avanzado.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#proyecto">
                  Conocer el proyecto <ArrowRight size={18} />
                </a>
                <a className="btn btn-secondary" href="#publicaciones">
                  Ver publicaciones
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>Modular</strong>
                  <span>Arquitectura adaptable</span>
                </div>
                <div>
                  <strong>Escalable</strong>
                  <span>Neonatal · Pediátrico · Adulto</span>
                </div>
                <div>
                  <strong>Argentina</strong>
                  <span>Innovación aplicada a educación</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-shell">
                <img
                  src="/assets/sim-yardi-neonatal.jpg"
                  alt="SIM-YArdi en configuración neonatal"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="hero-floating">
                <span className="status-dot"></span>
                <div>
                  <small>SIM-YArdi</small>
                  <strong>Simulación realista. Formación sin límites.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proyecto" className="section section-light">
          <div className="container">
            <SectionTitle
              eyebrow="El proyecto"
              title="Una plataforma creada para aprender haciendo."
              text="SIM-YArdi busca transformar la formación clínica mediante escenarios reproducibles, adaptables y de alta fidelidad, con foco en la medicina crítica."
            />

            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <div className="icon-box">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>

            <div className="project-band">
              <div>
                <span className="eyebrow">Visión</span>
                <h3>
                  Democratizar el acceso a la simulación clínica de alta
                  fidelidad.
                </h3>
              </div>
              <p>
                Una solución concebida para instituciones públicas y privadas,
                con una arquitectura que prioriza adaptabilidad, mantenibilidad
                y evolución tecnológica.
              </p>
            </div>
          </div>
        </section>

        <section id="arquitectura" className="section section-dark">
          <div className="container architecture-grid">
            <div className="architecture-image">
              <img
                src="/assets/sim-yardi-componentes.jpg"
                alt="Arquitectura modular y componentes del sistema SIM-YArdi"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <span className="eyebrow light">Arquitectura del sistema</span>
              <h2>Descentralizada, modular y preparada para evolucionar.</h2>
              <p className="section-lead inverse-text">
                Cada subsistema puede concebirse como una unidad funcional con
                responsabilidades definidas, facilitando mantenimiento, pruebas
                y futuras ampliaciones.
              </p>

              <div className="module-list">
                {modules.map(([letter, title, text]) => (
                  <div className="module-item" key={letter}>
                    <span className="module-letter">{letter}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="aplicaciones" className="section section-white">
          <div className="container">
            <SectionTitle
              eyebrow="Aplicaciones"
              title="Pensado para escenarios clínicos de alta complejidad."
              text="La plataforma puede convertirse en un soporte para prácticas técnicas, razonamiento clínico, coordinación de equipos y debriefing."
            />

            <div className="application-grid">
              {applications.map((item) => (
                <article className="application-card" key={item.title}>
                  <div className="application-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section evidence-section">
          <div className="container evidence-grid">
            <div>
              <span className="eyebrow">Principios de diseño</span>
              <h2>Más que un simulador: una plataforma de aprendizaje.</h2>
            </div>

            <div className="check-list">
              {[
                "Configuraciones adaptables según el escenario.",
                "Componentes independientes para facilitar mantenimiento.",
                "Prácticas seguras, repetibles y observables.",
                "Base escalable para nuevas capacidades.",
                "Enfoque orientado a formación clínica y trabajo en equipo.",
              ].map((item) => (
                <div className="check-item" key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="publicaciones" className="section section-light">
          <div className="container">
            <SectionTitle
              eyebrow="Publicaciones"
              title="Avances, artículos y conocimiento abierto del proyecto."
              text="Esta sección queda preparada para documentar la evolución de SIM-YArdi y compartir contenidos técnicos, educativos y de investigación."
            />

            <div className="article-grid">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            <div className="section-cta">
              <button className="btn btn-outline" type="button">
                Explorar todas las publicaciones
              </button>
            </div>
          </div>
        </section>

        <section id="galeria" className="section gallery-section">
          <div className="container">
            <SectionTitle
              eyebrow="Galería"
              title="SIM-YArdi en desarrollo."
              text="Prototipos, módulos y configuraciones que documentan la evolución del sistema."
            />

            <div className="gallery-grid">
              <figure className="gallery-large">
                <img
                  src="/assets/sim-yardi-modular.jpg"
                  alt="Sistema modular SIM-YArdi"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure>
                <img
                  src="/assets/sim-yardi-componentes.jpg"
                  alt="Componentes del sistema SIM-YArdi"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure>
                <img
                  src="/assets/sim-yardi-neonatal.jpg"
                  alt="Configuración neonatal SIM-YArdi"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section section-dark research-section">
          <div className="container research-grid">
            <div className="research-icon">
              <Microscope size={42} />
            </div>
            <div>
              <span className="eyebrow light">Investigación y desarrollo</span>
              <h2>
                Un proyecto vivo, documentable y abierto a nuevas líneas de
                trabajo.
              </h2>
              <p>
                La web institucional puede convertirse en el punto central para
                publicar avances técnicos, pruebas, papers, material docente,
                participación en jornadas y colaboraciones.
              </p>
            </div>
            <a href="#contacto" className="btn btn-primary">
              Contactar al proyecto
            </a>
          </div>
        </section>

        <section id="contacto" className="section section-white">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">Contacto</span>
              <h2>Conectemos instituciones, profesionales e innovación.</h2>
              <p className="section-lead">
                Reemplazaremos estos datos por los canales oficiales cuando los
                tengas definidos.
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-row">
                <span>Correo</span>
                <a href="mailto:contacto@sim-yardi.com">
                  contacto@sim-yardi.com
                </a>
              </div>
              <div className="contact-row">
                <span>Redes</span>
                <a
                  href="https://www.instagram.com/sim_yardi?stkn=d2xuMzBvMWdsc2Zh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </div>
              <div className="contact-row">
                <span>Origen</span>
                <strong>Argentina</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
