const headerStyles = {
  wrap: {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(251, 248, 242, 0.92)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderBottom: '1px solid var(--ink-line)',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto',
    padding: '14px 32px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 32,
  },
  brand: { display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' },
  logo: { height: 38, width: 'auto', display: 'block' },
  brandText: { lineHeight: 1.1, display: 'flex', flexDirection: 'column', gap: 1 },
  brandName: {
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18,
    color: 'var(--marina-900)',
  },
  brandTag: {
    fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.16em',
    textTransform: 'uppercase', color: 'var(--ink-soft)',
  },
  nav: { display: 'flex', alignItems: 'center', gap: 28 },
  link: {
    fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
    color: 'var(--ink-strong)', cursor: 'pointer',
    padding: '4px 0', borderBottom: '1px solid transparent',
    transition: 'color 140ms, border-color 140ms',
  },
  linkActive: {
    color: 'var(--marina-700)',
    borderBottomColor: 'var(--marina-700)',
  },
  cta: {
    fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
    padding: '10px 18px', borderRadius: 4, border: 'none',
    background: 'var(--marina-700)', color: 'white', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    transition: 'background 140ms',
  },
};

const Header = ({ route, onNav }) => {
  const links = [
    ['home', 'Home'],
    ['servizi', 'Servizi'],
    ['studio', 'Studio'],
    ['contatti', 'Contatti'],
  ];
  return (
    <header style={headerStyles.wrap}>
      <div style={headerStyles.inner}>
        <div style={headerStyles.brand} onClick={() => onNav('home')}>
          <img src={(window.__resources && window.__resources.logoPaganotti) || "assets/logo-paganotti.png"} style={headerStyles.logo} alt="Paganotti"/>
          <div style={headerStyles.brandText}>
            <span style={headerStyles.brandName}>Paganotti</span>
            <span style={headerStyles.brandTag}>Studio di Geometra · Ghemme</span>
          </div>
        </div>
        <nav style={headerStyles.nav}>
          {links.map(([id, label]) => (
            <span
              key={id}
              style={{ ...headerStyles.link, ...(route === id ? headerStyles.linkActive : {}) }}
              onClick={() => onNav(id)}
            >{label}</span>
          ))}
          <button style={headerStyles.cta}
            onClick={() => onNav('contatti')}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--marina-500)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--marina-700)'}>
            Prenota sopralluogo <PgIcon name="arrowRight" />
          </button>
        </nav>
      </div>
    </header>
  );
};

window.Header = Header;
