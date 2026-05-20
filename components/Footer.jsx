const footerStyles = {
  wrap: {
    background: 'var(--marina-900)',
    color: 'var(--marina-200)',
    padding: '64px 32px 32px',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 56,
    paddingBottom: 56, borderBottom: '1px solid rgba(217,230,240,0.15)',
  },
  brandCol: { display: 'flex', flexDirection: 'column', gap: 18 },
  brandRow: { display: 'flex', alignItems: 'center', gap: 14 },
  logo: { height: 44, filter: 'brightness(1.4) saturate(0.6)' },
  brandName: { fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--paper)', fontWeight: 500 },
  brandTag: { fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--marina-300)', marginTop: 4 },
  about: { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.65, color: 'var(--marina-200)', margin: 0, maxWidth: '36ch' },
  colTitle: {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
    letterSpacing: '0.20em', textTransform: 'uppercase',
    color: 'var(--marina-300)', marginBottom: 18,
  },
  links: { display: 'flex', flexDirection: 'column', gap: 12 },
  link: {
    fontFamily: 'var(--font-sans)', fontSize: 14,
    color: 'var(--marina-100)', cursor: 'pointer',
    transition: 'color 140ms',
  },
  contact: { display: 'flex', flexDirection: 'column', gap: 12 },
  contactLine: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--marina-100)', lineHeight: 1.5 },
  contactIcon: { color: 'var(--marina-300)', marginTop: 2 },
  bottom: {
    maxWidth: 1200, margin: '32px auto 0',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontSize: 12, color: 'var(--marina-300)', flexWrap: 'wrap', gap: 12,
  },
  legal: { display: 'flex', gap: 20 },
  legalLink: { color: 'var(--marina-300)', cursor: 'pointer' },
  stampMini: {
    fontFamily: 'var(--font-mono)', fontSize: 11,
    letterSpacing: '0.10em',
    color: 'var(--marina-300)',
  },
};

const Footer = ({ onNav }) => (
  <footer style={footerStyles.wrap}>
    <div style={footerStyles.inner}>
      <div style={footerStyles.brandCol}>
        <div style={footerStyles.brandRow}>
          <img src={(window.__resources && window.__resources.logoPaganotti) || "assets/logo-paganotti.png"} style={footerStyles.logo} alt=""/>
          <div>
            <div style={footerStyles.brandName}>Paganotti</div>
            <div style={footerStyles.brandTag}>Studio di Geometra · Ghemme</div>
          </div>
        </div>
        <p style={footerStyles.about}>
          Pratiche catastali, perizie, preliminari e adempimenti urbanistici
          per privati e piccole imprese nel territorio di Novara dal 1998.
        </p>
      </div>
      <div>
        <div style={footerStyles.colTitle}>Studio</div>
        <div style={footerStyles.links}>
          <span style={footerStyles.link} onClick={()=>onNav('home')}>Home</span>
          <span style={footerStyles.link} onClick={()=>onNav('servizi')}>Servizi</span>
          <span style={footerStyles.link} onClick={()=>onNav('studio')}>Lo Studio</span>
          <span style={footerStyles.link} onClick={()=>onNav('contatti')}>Contatti</span>
        </div>
      </div>
      <div>
        <div style={footerStyles.colTitle}>Pratiche</div>
        <div style={footerStyles.links}>
          <span style={footerStyles.link}>Catasto</span>
          <span style={footerStyles.link}>Preliminari di compravendita</span>
          <span style={footerStyles.link}>Perizie e stime</span>
          <span style={footerStyles.link}>Urbanistica · P.R.G.</span>
        </div>
      </div>
      <div>
        <div style={footerStyles.colTitle}>Contatti</div>
        <div style={footerStyles.contact}>
          <div style={footerStyles.contactLine}>
            <PgIcon name="mapPin" style={footerStyles.contactIcon} />
            <span>Via Roma 30<br/>28074 Ghemme (NO)</span>
          </div>
          <div style={footerStyles.contactLine}>
            <PgIcon name="phone" style={footerStyles.contactIcon} />
            <span style={{fontFamily: 'var(--font-mono)'}}>+39 0163841357</span>
          </div>
          <div style={footerStyles.contactLine}>
            <PgIcon name="mail" style={footerStyles.contactIcon} />
            <span style={{fontFamily: 'var(--font-mono)'}}>ufficio@studiopaganotti.com</span>
          </div>
        </div>
      </div>
    </div>
    <div style={footerStyles.bottom}>
      <span style={footerStyles.stampMini}>STUDIO GEOM. LUCIANO PAGANOTTI · GHEMME (NO)</span>
      <div style={footerStyles.legal}>
        <span style={footerStyles.legalLink}>Privacy</span>
        <span style={footerStyles.legalLink}>Cookie</span>
        <span>© 2026 Geom. Luciano Paganotti · P. IVA 02814340036</span>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
