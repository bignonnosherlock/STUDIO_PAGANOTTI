const studioPageStyles = {
  hero: {
    background: 'linear-gradient(180deg, #EEF3F7 0%, #FBF8F2 100%)',
    padding: '88px 32px 56px',
  },
  heroInner: { maxWidth: 1200, margin: '0 auto' },
  eyebrow: { fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--marina-500)', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 },
  rule: { width: 32, height: 1, background: 'var(--marina-500)' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 72, lineHeight: 1.05, letterSpacing: '-0.012em', color: 'var(--marina-900)', margin: 0 },
  em: { fontWeight: 400, fontStyle: 'italic', color: 'var(--marina-700)' },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 18, color: 'var(--ink-body)', lineHeight: 1.65, margin: '20px 0 0', maxWidth: '50ch' },

  stampWrap: {
    aspectRatio: '1 / 1',
    background: 'var(--paper-pure)', border: '1px solid var(--ink-line)',
    borderRadius: 8, padding: 32, position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  stampImg: { width: '78%', height: 'auto', mixBlendMode: 'multiply' },
  stampLabel: { position: 'absolute', top: 20, left: 24, fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--marina-700)' },
  stampMeta: { position: 'absolute', bottom: 20, right: 24, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-soft)' },

  body: { background: 'var(--paper)', padding: '64px 32px 96px' },
  bodyInner: { maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 36 },
  para: { fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.75, color: 'var(--ink-body)', margin: 0, maxWidth: '68ch' },
  pullQuote: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 32, lineHeight: 1.35, color: 'var(--marina-700)', margin: '24px 0', padding: '0 0 0 28px', borderLeft: '2px solid var(--sand-500)' },

  stats: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, padding: '32px 0', borderTop: '1px solid var(--ink-line)', borderBottom: '1px solid var(--ink-line)', marginTop: 16 },
  stat: { paddingRight: 24, borderRight: '1px solid var(--ink-line)' },
  statLast: { borderRight: 'none' },
  statNum: { fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 400, color: 'var(--marina-900)', lineHeight: 1 },
  statLabel: { fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--ink-soft)', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: 10 },

  signoffWrap: { display: 'flex', alignItems: 'stretch', gap: 28, marginTop: 24, paddingTop: 28, borderTop: '1px solid var(--ink-line)' },
  signRule: { width: 2, background: 'var(--sand-500)', flexShrink: 0 },
  signMeta: { display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' },
  signDate: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--ink-soft)' },
  signName: { fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--marina-900)', lineHeight: 1.1 },
  signTitle: { fontSize: 13, color: 'var(--ink-soft)', letterSpacing: '0.04em' },
};

const StudioPage = ({ onNav }) => (
  <>
    <section style={studioPageStyles.hero}>
      <div style={studioPageStyles.heroInner}>
        <div>
          <div style={studioPageStyles.eyebrow}>
            <span style={studioPageStyles.rule}></span> Lo Studio
          </div>
          <h1 style={studioPageStyles.h1}>Una professione<br/><span style={studioPageStyles.em}>antica e precisa.</span></h1>
          <p style={studioPageStyles.sub}>
            Il geometra è la figura che, da secoli, misura i terreni e
            redige gli atti che li accompagnano. Lo studio porta questa
            tradizione nel presente, con strumenti contemporanei e una
            cura artigianale per la pratica.
          </p>
        </div>
      </div>
    </section>

    <section style={studioPageStyles.body}>
      <div style={studioPageStyles.bodyInner}>
        <p style={studioPageStyles.para}>
          Lo studio nasce a Novara nel 1998, con un'idea semplice:
          accompagnare privati e piccoli proprietari attraverso le pratiche
          tecniche e burocratiche che riguardano la loro terra, la loro
          casa, la loro eredità.
        </p>
        <p style={studioPageStyles.pullQuote}>
          Un terreno non è mai soltanto un mappale. È una storia di famiglia,
          un confine che si tramanda. Va trattato con la stessa attenzione.
        </p>
        <p style={studioPageStyles.para}>
          Operiamo in stretta collaborazione con notai, agronomi e tecnici
          degli uffici comunali del territorio. Ogni pratica viene seguita
          personalmente dal primo sopralluogo fino alla firma del rogito, senza
          deleghe a terzi.
        </p>

        <div style={studioPageStyles.stats}>
          <div style={studioPageStyles.stat}>
            <div style={studioPageStyles.statNum}>27</div>
            <div style={studioPageStyles.statLabel}>Anni di attività</div>
          </div>
          <div style={studioPageStyles.stat}>
            <div style={studioPageStyles.statNum}>1.200+</div>
            <div style={studioPageStyles.statLabel}>Pratiche concluse</div>
          </div>
          <div style={studioPageStyles.stat}>
            <div style={studioPageStyles.statNum}>56</div>
            <div style={studioPageStyles.statLabel}>Comuni serviti</div>
          </div>
          <div style={{...studioPageStyles.stat, ...studioPageStyles.statLast}}>
            <div style={studioPageStyles.statNum}>1998</div>
            <div style={studioPageStyles.statLabel}>Anno di fondazione</div>
          </div>
        </div>

      </div>
    </section>
    <CTACard onNav={onNav}/>
  </>
);

window.StudioPage = StudioPage;
