const heroStyles = {
  wrap: {
    position: 'relative', overflow: 'hidden',
    background: 'linear-gradient(180deg, #EEF3F7 0%, #D8E4EC 38%, #FBF8F2 100%)',
    paddingBottom: 0,
  },
  inner: {
    maxWidth: 1200, margin: '0 auto', padding: '88px 32px 64px',
    display: 'block',
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500,
    letterSpacing: '0.20em', textTransform: 'uppercase',
    color: 'var(--marina-500)',
    display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18,
  },
  rule: { width: 32, height: 1, background: 'var(--marina-500)' },
  h1: {
    fontFamily: 'var(--font-display)', fontWeight: 300,
    fontSize: 78, lineHeight: 1.02, letterSpacing: '-0.012em',
    color: 'var(--marina-900)', margin: 0,
  },
  em: { fontWeight: 400, fontStyle: 'italic', color: 'var(--marina-700)' },
  sub: {
    fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.6,
    color: 'var(--ink-body)', maxWidth: '50ch',
    margin: '24px 0 32px 0',
  },
  actions: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  btnPrimary: {
    fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500,
    padding: '14px 24px', borderRadius: 4, border: 'none',
    background: 'var(--marina-700)', color: 'white', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: 10,
  },
  btnSecondary: {
    fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500,
    padding: '13px 24px', borderRadius: 4,
    background: 'transparent', color: 'var(--marina-700)',
    border: '1px solid var(--marina-700)', cursor: 'pointer',
  },
  cardWrap: {
    position: 'relative', alignSelf: 'center',
  },
  card: {
    background: 'var(--paper-pure)',
    border: '1px solid var(--ink-line)',
    borderRadius: 8,
    padding: 28,
    boxShadow: '0 18px 38px -16px rgba(14,42,71,0.18), 0 2px 6px rgba(14,42,71,0.04)',
  },
  cardHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
    paddingBottom: 14, borderBottom: '1px solid var(--ink-line)', marginBottom: 14,
  },
  cardTitle: { fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--marina-900)', fontWeight: 500 },
  stampTag: {
    fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--marina-700)',
  },
  dataGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px' },
  dataLabel: {
    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--ink-soft)', marginBottom: 4,
  },
  dataValue: {
    fontFamily: 'var(--font-mono)', fontSize: 16,
    color: 'var(--marina-700)',
  },
  footnote: {
    marginTop: 18, paddingTop: 12, borderTop: '1px solid var(--ink-line)',
    fontSize: 12, color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 8,
  },
};

const Hero = ({ onNav }) => (
  <section style={heroStyles.wrap}>
    <div style={heroStyles.inner}>
      <div>
        <div style={heroStyles.eyebrow}>
          <span style={heroStyles.rule}></span>
          Catasto · Urbanistica · Compravendite
        </div>
        <h1 style={heroStyles.h1}>
          Misura, ascolto,<br/>
          <span style={heroStyles.em}>precisione.</span>
        </h1>
        <p style={heroStyles.sub}>
          Pratiche catastali, perizie, preliminari di compravendita e
          consultazioni urbanistiche, seguiti personalmente dal primo
          sopralluogo fino al rogito notarile.
        </p>
        <div style={heroStyles.actions}>
          <button style={heroStyles.btnPrimary} onClick={() => onNav('contatti')}>
            Prenota un sopralluogo <PgIcon name="arrowRight" />
          </button>
          <button style={heroStyles.btnSecondary} onClick={() => onNav('servizi')}>
            I nostri servizi
          </button>
        </div>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
