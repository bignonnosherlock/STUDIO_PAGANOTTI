const servicesData = [
  {
    icon: 'landmark',
    title: 'Catasto',
    bullets: ['Visure e estratti di mappa', 'Voltura e accatastamento', 'Type / DOCFA / PREGEO'],
  },
  {
    icon: 'fileSignature',
    title: 'Preliminari di compravendita',
    bullets: ['Redazione scritture private', 'Verifica conformità catastale', 'Coordinamento con il Notaio'],
  },
  {
    icon: 'scale',
    title: 'Perizie e stime',
    bullets: ['Stima del valore di mercato', 'Perizie giurate per i tribunali', 'Divisioni ereditarie'],
  },
  {
    icon: 'map',
    title: 'Urbanistica · P.R.G.',
    bullets: ['Certificati di destinazione', 'Verifica vincoli e fasce', 'Pratiche edilizie e SCIA'],
  },
];

const servicesGridStyles = {
  wrap: { background: 'var(--paper)', padding: '96px 32px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
    marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--ink-line)',
    gap: 32, flexWrap: 'wrap',
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.20em', textTransform: 'uppercase',
    color: 'var(--marina-500)', marginBottom: 14,
  },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, lineHeight: 1.1,
    letterSpacing: '-0.012em', color: 'var(--marina-900)', margin: 0, maxWidth: '14ch',
  },
  intro: {
    fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.65,
    color: 'var(--ink-body)', maxWidth: '46ch', margin: 0,
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1,
    background: 'var(--ink-line)',
    border: '1px solid var(--ink-line)',
    borderRadius: 8, overflow: 'hidden',
  },
  card: {
    background: 'var(--paper-pure)',
    padding: '40px 36px',
    display: 'flex', flexDirection: 'column', gap: 20,
    transition: 'background 220ms',
    cursor: 'pointer',
  },
  iconRow: { display: 'flex', alignItems: 'center', gap: 14 },
  iconBox: {
    width: 44, height: 44, borderRadius: 4,
    background: 'var(--marina-050)',
    color: 'var(--marina-700)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  title: { fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: 'var(--marina-900)', margin: 0 },
  bullets: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 },
  bullet: {
    display: 'flex', alignItems: 'flex-start', gap: 10,
    fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink-body)',
  },
  bulletDot: {
    width: 4, height: 4, borderRadius: 999, background: 'var(--marina-500)',
    marginTop: 9, flexShrink: 0,
  },
  readMore: {
    marginTop: 'auto', paddingTop: 8,
    fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
    color: 'var(--marina-700)', letterSpacing: '0.06em',
    textTransform: 'uppercase',
    display: 'inline-flex', alignItems: 'center', gap: 6,
  },
};

const ServiceCard = ({ s, onNav }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{ ...servicesGridStyles.card, background: hover ? 'var(--paper)' : 'var(--paper-pure)' }}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      onClick={() => onNav('servizi')}>
      <div style={servicesGridStyles.iconRow}>
        <div style={servicesGridStyles.iconBox}><PgIcon name={s.icon} className="pg-icon pg-icon-lg" /></div>
        <h3 style={servicesGridStyles.title}>{s.title}</h3>
      </div>
      <ul style={servicesGridStyles.bullets}>
        {s.bullets.map(b => (
          <li key={b} style={servicesGridStyles.bullet}>
            <span style={servicesGridStyles.bulletDot}></span>{b}
          </li>
        ))}
      </ul>
      <div style={servicesGridStyles.readMore}>
        Scopri di più <PgIcon name="arrowRight" style={{width: 14, height: 14}} />
      </div>
    </div>
  );
};

const ServicesGrid = ({ onNav }) => (
  <section style={servicesGridStyles.wrap}>
    <div style={servicesGridStyles.inner}>
      <div style={servicesGridStyles.header}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 20, flex: 1, minWidth: 0}}>
          <h2 style={servicesGridStyles.h2}>Una pratica seguita dall'inizio alla fine.</h2>
          <p style={servicesGridStyles.intro}>
            Lo studio si occupa di tutti gli adempimenti tecnici e catastali
            legati alla proprietà di terreni e fabbricati nel territorio di
            Novara e provincia. Ogni pratica viene seguita personalmente.
          </p>
          <div style={{...servicesGridStyles.eyebrow, marginBottom: 0, marginTop: 4}}>— Servizi</div>
        </div>
      </div>
      <div style={servicesGridStyles.grid}>
        {servicesData.map(s => <ServiceCard key={s.title} s={s} onNav={onNav} />)}
      </div>
    </div>
  </section>
);

window.ServicesGrid = ServicesGrid;
window.servicesData = servicesData;
