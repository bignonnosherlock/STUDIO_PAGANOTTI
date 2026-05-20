const servicesPageStyles = {
  hero: {
    background: 'linear-gradient(180deg, #EEF3F7 0%, #D8E4EC 100%)',
    padding: '88px 32px 64px',
  },
  heroInner: { maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 },
  eyebrow: {
    fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500,
    letterSpacing: '0.20em', textTransform: 'uppercase',
    color: 'var(--marina-500)',
    display: 'flex', alignItems: 'center', gap: 10,
  },
  rule: { width: 32, height: 1, background: 'var(--marina-500)' },
  h1: {
    fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 72,
    lineHeight: 1.05, letterSpacing: '-0.012em', color: 'var(--marina-900)', margin: 0,
  },
  em: { fontWeight: 400, fontStyle: 'italic', color: 'var(--marina-700)' },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 18, color: 'var(--ink-body)', maxWidth: '56ch', lineHeight: 1.6, marginTop: 8 },

  list: { background: 'var(--paper)', padding: '64px 32px 96px' },
  listInner: { maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0 },
  row: {
    display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: 56,
    padding: '40px 0', borderTop: '1px solid var(--ink-line)', alignItems: 'flex-start',
  },
  rowLast: { borderBottom: '1px solid var(--ink-line)' },
  iconCol: { display: 'flex', flexDirection: 'column', gap: 14 },
  iconBox: {
    width: 56, height: 56, borderRadius: 6,
    background: 'var(--marina-050)', color: 'var(--marina-700)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1px solid var(--marina-100)',
  },
  num: {
    fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-soft)',
    letterSpacing: '0.10em',
  },
  rowTitle: { fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--marina-900)', fontWeight: 500, margin: '0 0 12px 0' },
  rowBody: { fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink-body)', lineHeight: 1.65, margin: 0 },
  detailList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 },
  detail: { display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: 'var(--ink-strong)' },
  bullet: { width: 4, height: 4, borderRadius: 999, background: 'var(--marina-700)', marginTop: 8, flexShrink: 0 },
};

const fullServices = [
  {
    num: '01', icon: 'landmark', title: 'Catasto',
    body: "Tutti gli adempimenti presso l'Agenzia delle Entrate – Servizi catastali, dal recupero della visura fino all'aggiornamento di una nuova costruzione.",
    items: ['Visure ed estratti di mappa aggiornati', 'Tipo mappale, tipo di frazionamento (PREGEO)', 'Accatastamento fabbricati (DOCFA)', 'Voltura per successione e donazione'],
  },
  {
    num: '02', icon: 'fileSignature', title: 'Preliminari di compravendita',
    body: 'Redazione della scrittura privata preliminare con verifica catastale, ipotecaria e urbanistica preventiva. Coordinamento con il Notaio fino al rogito.',
    items: ['Verifica conformità catastale e urbanistica', "Stesura dell'atto preliminare", 'Calcolo imposte e oneri di registro', 'Coordinamento con il Notaio'],
  },
  {
    num: '03', icon: 'scale', title: 'Perizie e stime',
    body: "Stime di valore di mercato per compravendite private, divisioni ereditarie, perizie giurate per uso giudiziario o assicurativo.",
    items: ['Stima di mercato motivata', 'Perizie giurate (asseverate)', 'Divisione ereditaria', "Stime per istituti di credito"],
  },
  {
    num: '04', icon: 'map', title: 'Urbanistica · P.R.G.',
    body: 'Lettura degli strumenti urbanistici comunali, verifica di vincoli, fasce di rispetto e classificazioni geologiche, pratiche edilizie minori.',
    items: ['Certificato di destinazione urbanistica (C.D.U.)', "Verifica vincoli paesaggistici, idraulici e ambientali", "SCIA, CILA e permessi di costruire", 'Pratiche di sanatoria edilizia'],
  },
];

const ServicesPage = ({ onNav }) => (
  <>
    <section style={servicesPageStyles.hero}>
      <div style={servicesPageStyles.heroInner}>
        <div style={servicesPageStyles.eyebrow}>
          <span style={servicesPageStyles.rule}></span> Servizi dello studio
        </div>
        <h1 style={servicesPageStyles.h1}>Una pratica completa,<br/><span style={servicesPageStyles.em}>seguita con calma.</span></h1>
        <p style={servicesPageStyles.sub}>
          Ogni adempimento – dalla visura alla firma del rogito – viene
          seguito personalmente dallo studio. Qui di seguito, le quattro
          aree di lavoro principali.
        </p>
      </div>
    </section>
    <section style={servicesPageStyles.list}>
      <div style={servicesPageStyles.listInner}>
        {fullServices.map((s, i) => (
          <div key={s.num} style={{ ...servicesPageStyles.row, ...(i === fullServices.length - 1 ? servicesPageStyles.rowLast : {}) }}>
            <div style={servicesPageStyles.iconCol}>
              <div style={servicesPageStyles.iconBox}><PgIcon name={s.icon} className="pg-icon pg-icon-xl"/></div>

            </div>
            <div>
              <h3 style={servicesPageStyles.rowTitle}>{s.title}</h3>
              <p style={servicesPageStyles.rowBody}>{s.body}</p>
            </div>
            <ul style={servicesPageStyles.detailList}>
              {s.items.map(it => (
                <li key={it} style={servicesPageStyles.detail}>
                  <span style={servicesPageStyles.bullet}></span>{it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    <CTACard onNav={onNav}/>
  </>
);

window.ServicesPage = ServicesPage;
