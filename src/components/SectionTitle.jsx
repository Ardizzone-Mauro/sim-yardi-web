export default function SectionTitle({ eyebrow, title, text, inverse = false }) {
  return (
    <div className={`section-title ${inverse ? 'inverse' : ''}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  )
}
