import {
  Activity,
  Blocks,
  CheckCircle2,
  HeartPulse,
  Layers3,
  Microscope,
  Droplets,
  Wind,
  Syringe,
  Play,
  ShieldCheck,
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
    title: "Del equipo al paciente",
    text: "Entrenamiento que integra la operación de la tecnología con la lectura clínica, hemodinámica y sistémica.",
  },
  {
    icon: <Layers3 />,
    title: "Nacido desde enfermería",
    text: "Creado desde la práctica asistencial para potenciar el reconocimiento temprano de signos y complicaciones.",
  },
  {
    icon: <HeartPulse />,
    title: "Razonamiento en equipo",
    text: "Un entorno seguro para entrenar decisiones, comunicación y respuesta coordinada bajo presión.",
  },
  {
    icon: <ShieldCheck />,
    title: "Acceso a alta fidelidad",
    text: "Una solución desarrollada íntegramente en Argentina para instituciones públicas y privadas.",
  },
];

const modules = [
  [
    "A",
    "Módulo maniquí",
    "Silueta humana de interacción clínica y soporte del escenario, con tórax de silicona hiperrealista para la ventilación. Escalable para escenarios neonatales, pediátricos y adultos.",
  ],
  [
    "B",
    "Tablero de mando",
    "Centro de gestión operativa que distribuye el fluido neumático e hídrico hacia cada sitio, para que la complicación planificada suceda donde corresponde.",
  ],
  [
    "C",
    "Impulsión hidráulica",
    "Mueve el flujo hídrico en modo autónomo. Puede trabajar con ventilación manual o respirador, y hacerse bypass para integrarse a un equipo de ECMO real.",
  ],
  [
    "D",
    "Caja estructural",
    "Caja contenedora de unidades funcionales que ejecutan y materializan la complicación clínica definida para el entrenamiento.",
  ],
];

const applications = [
  {
    icon: <Wind />,
    title: "Talleres ventilatorios",
    text: "Aspiración de secreciones, auscultación y reconocimiento visual o táctil de asimetrías en la ventilación.",
  },
  {
    icon: <Droplets />,
    title: "Monitoreo y procedimientos",
    text: "Balance hídrico, domos de PVC y línea arterial, drenaje pleural, descompresión y pericardiocentesis.",
  },
  {
    icon: <Activity />,
    title: "Hemodinamia crítica",
    text: "Reconocimiento, monitoreo y manejo dinámico de variables hemodinámicas en pacientes críticos.",
  },
  {
    icon: <Syringe />,
    title: "Soporte vital y ECMO",
    text: "Circuitos simulados o conexión a equipos reales para estudiar fisiopatología y resolver complicaciones en tiempo real.",
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
                  src={`${import.meta.env.BASE_URL}assets/sim-yardi-neonatal.jpg`}
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
              title="Tecnología para entrenar hoy las decisiones que importan mañana."
              text="Una plataforma argentina de simulación clínica que acerca la formación a lo que realmente ocurre al pie de la cama."
            />

            <div className="project-story">
              <article>
                <h3>El vacío pedagógico: entre la teoría y la práctica</h3>
                <p>
                  En medicina crítica, especialmente ante soporte vital avanzado,
                  terapias de reemplazo o asistencia extracorpórea (ECMO), la
                  formación tradicional suele centrarse en operar el equipo. El
                  desafío es también aprender a interpretar la evolución
                  hemodinámica y sistémica del paciente y sus complicaciones
                  reales.
                </p>
              </article>
              <article>
                <h3>Nacido desde la práctica de enfermería</h3>
                <p>
                  SIM-YArdi surge de una necesidad observada en el terreno
                  asistencial: que quienes monitorean continuamente al paciente
                  crítico puedan entrenar técnica, signos clínicos, respuestas
                  hemodinámicas y complicaciones. Es una herramienta creada por
                  profesionales de la salud para fortalecer el razonamiento
                  clínico en equipo.
                </p>
              </article>
            </div>

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
                  De un propósito específico a una plataforma versátil.
                </h3>
              </div>
              <p>
                Su arquitectura descentralizada y modular permite entrenar
                habilidades ventilatorias, auscultatorias y de visualización;
                casos clínicos integrados; y escenarios avanzados de ECMO con
                circuitos simulados o equipos reales. Una solución integral
                argentina para democratizar la simulación de alta fidelidad.
              </p>
            </div>
          </div>
        </section>

        <section id="arquitectura" className="section section-dark">
          <div className="container architecture-grid">
            <div className="architecture-image">
              <img
                src={`${import.meta.env.BASE_URL}assets/sim-yardi-componentes.jpg`}
                alt="Arquitectura modular y componentes del sistema SIM-YArdi"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <span className="eyebrow light">Arquitectura del sistema</span>
              <h2>Descentralizada, modular y preparada para evolucionar.</h2>
              <p className="section-lead inverse-text">
                La independencia y adaptabilidad de sus componentes permite
                configurar cada escenario según objetivos pedagógicos y clínicos
                específicos, facilitando mantenimiento y escalabilidad.
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
              title="Versatilidad pedagógica para cada nivel de entrenamiento."
              text="Desde prácticas de habilidades específicas hasta escenarios clínicos integrales de alta complejidad."
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
                "Operación neumática autónoma para prácticas respiratorias.",
                "Circuitos hídrico y neumático integrados para destrezas de urgencia.",
                "Escenarios de hemodinamia y respuesta crítica.",
                "ECMO simulado o conectado a un equipo real.",
                "Formación interdisciplinaria en un entorno seguro.",
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
                  src={`${import.meta.env.BASE_URL}assets/sim-yardi-modular.jpg`}
                  alt="Sistema modular SIM-YArdi"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <figure>
                <img
                  src={`${import.meta.env.BASE_URL}assets/validacion-clinica-equipo.jpeg`}
                  alt="Equipo interdisciplinario durante la validación clínica de SIM-YArdi"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <figure>
                <img
                  src={`${import.meta.env.BASE_URL}assets/validacion-clinica-maniqui.jpeg`}
                  alt="SIM-YArdi durante una prueba clínica"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="investigacion" className="section validation-section">
          <div className="container validation-grid">
            <div className="validation-copy">
              <span className="eyebrow">Validación clínica en proceso</span>
              <h2>SIM-YArdi en evolución junto a equipos de referencia.</h2>
              <p className="section-lead">
                Iniciamos una etapa clave de co-evaluación con el Hospital de
                Niños Sor María Ludovica de La Plata, coordinada con la dirección
                del área de recuperación cardiovascular.
              </p>
              <p>
                En mesas de trabajo interdisciplinarias —con enfermeros expertos
                en ECMO, técnicos perfusionistas, ingenieros en simulación,
                inventores y cirujanos pediatras— sometimos el simulador a
                pruebas exigentes, incluida su primera conexión a un circuito de
                ECMO real. Este intercambio permite detectar detalles, realizar
                reajustes finos en los circuitos de presión y evolucionar desde
                la práctica real.
              </p>
            </div>
            <div className="validation-media">
              <video
                controls
                muted
                playsInline
                preload="metadata"
                poster={`${import.meta.env.BASE_URL}assets/validacion-clinica-poster.jpg`}
                aria-label="Video de la validación clínica de SIM-YArdi"
              >
                <source src={`${import.meta.env.BASE_URL}assets/validacion-clinica.mp4`} type="video/mp4" />
                Tu navegador no admite video HTML5.
              </video>
              <a className="video-link" href={`${import.meta.env.BASE_URL}assets/sim-yardi-ecmo.mp4`} target="_blank" rel="noreferrer">
                <Play size={17} /> Ver demostración ECMO
              </a>
            </div>
          </div>
        </section>

        <section className="section academic-section">
          <div className="container academic-grid">
            <div className="academic-gallery" aria-label="Presentación de SIM-YArdi en SASIM">
              <img
                className="academic-image-main"
                src={`${import.meta.env.BASE_URL}assets/sasim-presentacion-01.jpeg`}
                alt="Presentación de SIM-YArdi en el IV Congreso Argentino de Simulación"
                loading="lazy"
                decoding="async"
              />
              <img
                className="academic-image-small"
                src={`${import.meta.env.BASE_URL}assets/sasim-presentacion-02.jpeg`}
                alt="Integrante de SIM-YArdi en el Congreso de SASIM"
                loading="lazy"
                decoding="async"
              />
              <img
                className="academic-image-small"
                src={`${import.meta.env.BASE_URL}assets/sasim-presentacion-03.jpeg`}
                alt="Auditorio durante la exposición de SIM-YArdi"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <span className="eyebrow">Divulgación académica</span>
              <h2>SIM-YArdi en el IV Congreso Argentino de Simulación.</h2>
              <p className="section-lead">
                Presentamos el proyecto en el Congreso de la Sociedad Argentina
                de Simulación (SASIM) ante más de 300 profesionales.
              </p>
              <p>
                Compartimos los fundamentos de nuestra arquitectura modular y
                el propósito de acortar la brecha entre la teoría y la práctica
                en la medicina crítica pediátrica.
              </p>
            </div>
          </div>
        </section>

        <section className="section event-section">
          <div className="container event-grid">
            <div className="event-poster">
              <img
                src={`${import.meta.env.BASE_URL}assets/jornada-ecmo-unlp.jpeg`}
                alt="Jornada Interinstitucional de ECMO en la Facultad de Ciencias Médicas de la UNLP"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="event-copy">
              <span className="eyebrow light">Alianzas académicas</span>
              <h2>Próxima participación en las Jornadas de ECMO de la UNLP.</h2>
              <p className="section-lead inverse-text">
                A partir de las pruebas de validación, fuimos invitados a
                participar con un espacio de demostración en la Facultad de
                Ciencias Médicas de la Universidad Nacional de La Plata.
              </p>
              <p>
                Continuaremos testeando el sistema junto a colegas y
                especialistas. La jornada propone un espacio de actualización,
                capacitación e intercambio sobre indicaciones, fundamentos y
                aplicaciones de ECMO en escenarios de alta complejidad.
              </p>
              <div className="event-details">
                <span>Martes 6 de octubre de 2026 · 08:00 a 16:40 h</span>
                <span>Aula Magna · Facultad de Ciencias Médicas UNLP</span>
                <span>Actividad gratuita · Cupos limitados · Preinscripción previa</span>
              </div>
              <a
                className="btn btn-primary event-button"
                href="https://forms.gle/Fiee1bJwbtCUZxZJ9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preinscribirme a la jornada <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="section ip-section">
          <div className="container">
            <SectionTitle
              eyebrow="Propiedad intelectual · Desarrollo nacional"
              title="Resguardo legal y evolución documentada en el INPI."
              text="La protección de la innovación acompaña el crecimiento técnico y clínico de SIM-YArdi."
            />
            <div className="ip-grid">
              <div className="ip-copy">
                <p>
                  El proyecto cuenta con formalización legal y protección de
                  propiedad intelectual en el Instituto Nacional de la Propiedad
                  Industrial (INPI), con expediente oficializado desde su origen
                  y publicaciones formales en el Boletín Oficial.
                </p>
                <p>
                  De manera continua se integran las sucesivas adiciones
                  técnicas que amplían las capacidades de la plataforma,
                  acompañando su desarrollo como tecnología nacional aplicada a
                  la formación en medicina crítica.
                </p>
              </div>
              <div className="ip-documents" aria-label="Documentación de propiedad intelectual de SIM-YArdi">
                <figure>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/inpi-boletin-portada.jpeg`}
                    alt="Portada del Boletín de Patentes de Invención y Modelos de Utilidad del INPI"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/inpi-codigo-patentes.jpeg`}
                    alt="Código INID para patentes y modelos de utilidad del INPI"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/inpi-publicacion-sim-yardi.jpeg`}
                    alt="Publicación de la solicitud de patente de SIM-YArdi en el Boletín del INPI"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
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
