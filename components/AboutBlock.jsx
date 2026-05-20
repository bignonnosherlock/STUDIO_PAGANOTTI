const aboutStyles = {
  wrap: { background: 'var(--paper)', padding: '96px 32px' },
  inner: {
    maxWidth: 1200, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
  },
  imageWrap: {
    aspectRatio: '4 / 5',
    background: 'linear-gradient(160deg, #B9CFDE 0%, #D8E4EC 40%, #F2EDE3 100%)',
    borderRadius: 8,
    position: 'relative', overflow: 'hidden',
    border: '1px solid var(--ink-line)',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    padding: 32,
  },
  imageStamp: {
    position: 'absolute', top: 24, left: 24,
    fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--marina-700)',
    background: 'var(--paper)', padding: '6px 12px', borderRadius: 2,
    boxShadow: 'inset 0 0 0 1px var(--marina-200)',
  },
  imageNum: {
    position: 'absolute', bottom: 24, right: 28,
    fontFamily: 'var(--font-mono)', fontSize: 11,
    color: 'var(--marina-700)', opacity: 0.7,
  },
  /* placeholder content inside the photo card */
  placeholderLogo: { width: '60%', maxWidth: 280, height: 'auto', opacity: 0.85 },
  textCol: { display: 'flex', flexDirection: 'column', gap: 28 },
  eyebrow: {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.20em', textTransform: 'uppercase',
    color: 'var(--marina-500)',
  },
  quote: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
    fontSize: 32, lineHeight: 1.35, color: 'var(--marina-900)',
    margin: 0, position: 'relative', paddingLeft: 28,
    borderLeft: '2px solid var(--sand-500)',
  },
  body: {
    fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.7,
    color: 'var(--ink-body)', margin: 0, maxWidth: '54ch',
  },
  signoff: {
    display: 'flex', alignItems: 'center', gap: 20,
    paddingTop: 24, borderTop: '1px solid var(--ink-line)',
  },
  monogram: {
    width: 64, height: 64, flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'var(--paper-pure)',
    border: '1px solid var(--marina-200)',
    borderRadius: 4,
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 28, fontWeight: 400, letterSpacing: '0.04em',
    color: 'var(--marina-700)',
    boxShadow: 'inset 0 -2px 0 var(--sand-500)',
  },
  signMeta: { display: 'flex', flexDirection: 'column', gap: 4 },
  signName: { fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--marina-900)' },
  signTitle: { fontSize: 12, color: 'var(--ink-soft)', letterSpacing: '0.06em' },
  signCode: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--marina-700)', letterSpacing: '0.10em', marginTop: 2 },
};

const AboutBlock = () => (
  <section style={aboutStyles.wrap}>
    <div style={aboutStyles.inner}>
      <div style={aboutStyles.imageWrap}>
        <span style={aboutStyles.imageStamp}>Lo Studio</span>
        <img src={(window.__resources && window.__resources.logoPaganotti) || "assets/logo-paganotti.png"} alt="" style={aboutStyles.placeholderLogo}/>
        <span style={aboutStyles.imageNum}>NO · 28100</span>
      </div>
      <div style={aboutStyles.textCol}>
        <span style={aboutStyles.eyebrow}>— Una parola dallo studio</span>
        <p style={aboutStyles.quote}>
          Un terreno non è soltanto un numero su una mappa. È una storia,
          una famiglia, una decisione importante. Il mio lavoro è
          accompagnarla con la dovuta calma.
        </p>
        <p style={aboutStyles.body}>
          Lo studio opera a Ghemme e in tutta la provincia di Novara dal
          1998. Segue privati e piccole imprese per pratiche catastali,
          compravendite, perizie e adempimenti urbanistici, in collaborazione
          con notai e tecnici comunali del territorio.
        </p>
        <div style={aboutStyles.signoff}>
          <div style={aboutStyles.monogram} aria-hidden="true">L·P</div>
          <div style={aboutStyles.signMeta}>
            <span style={aboutStyles.signName}>Geom. Luciano Paganotti</span>
            <span style={aboutStyles.signTitle}>Geometra · Ghemme (NO)</span>
            <span style={aboutStyles.signCode}>P. IVA 02814340036</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.AboutBlock = AboutBlock;
