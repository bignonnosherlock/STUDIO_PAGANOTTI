const ctaStyles = {
  wrap: { background: 'var(--paper)', padding: '0 32px 96px' },
  inner: {
    maxWidth: 1200, margin: '0 auto',
    background: 'linear-gradient(135deg, #143458 0%, #184878 60%, #286898 100%)',
    borderRadius: 12,
    padding: '64px 56px',
    display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'center',
    position: 'relative', overflow: 'hidden',
    color: 'var(--paper)',
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.20em', textTransform: 'uppercase',
    color: 'var(--marina-300)', marginBottom: 14,
  },
  title: {
    fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 44, lineHeight: 1.1,
    letterSpacing: '-0.012em', color: 'var(--paper)', margin: 0,
  },
  em: { fontStyle: 'italic', color: 'var(--marina-200)' },
  copy: {
    fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.65,
    color: 'var(--marina-100)', margin: '20px 0 0', maxWidth: '46ch',
  },
  actions: {
    display: 'flex', flexDirection: 'column', gap: 14,
    alignItems: 'stretch',
  },
  btnPrimary: {
    fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500,
    padding: '16px 24px', borderRadius: 4, border: 'none',
    background: 'var(--paper)', color: 'var(--marina-900)', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
  },
  btnSecondary: {
    fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500,
    padding: '16px 24px', borderRadius: 4,
    background: 'transparent', color: 'var(--paper)',
    border: '1px solid rgba(255,255,255,0.35)', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
  },
  /* decorative sail / wave */
  deco: {
    position: 'absolute', right: -120, bottom: -160,
    width: 460, height: 460,
    background: 'radial-gradient(closest-side, rgba(217,230,240,0.18), transparent 70%)',
    borderRadius: 999, pointerEvents: 'none',
  },
};

const CTACard = ({ onNav }) => (
  <section style={ctaStyles.wrap}>
    <div style={ctaStyles.inner}>
      <div style={ctaStyles.deco}></div>
      <div style={{position: 'relative'}}>
        <div style={ctaStyles.eyebrow}>— Iniziamo dal sopralluogo</div>
        <h2 style={ctaStyles.title}>Una pratica chiara<br/><span style={ctaStyles.em}>nasce da una visita.</span></h2>
        <p style={ctaStyles.copy}>
          Il primo sopralluogo è sempre gratuito. Si valuta insieme la
          situazione, si chiariscono i passaggi, e solo allora vi viene
          comunicato un preventivo scritto.
        </p>
      </div>
      <div style={ctaStyles.actions}>
        <button style={ctaStyles.btnPrimary} onClick={() => onNav('contatti')}>
          Prenota sopralluogo <PgIcon name="arrowRight" />
        </button>
        <button style={ctaStyles.btnSecondary} onClick={() => onNav('servizi')}>
          Vedi tutti i servizi <PgIcon name="arrowRight" />
        </button>
      </div>
    </div>
  </section>
);

window.CTACard = CTACard;
