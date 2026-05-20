const processStyles = {
  wrap: {
    background: 'var(--marina-900)',
    color: 'var(--marina-100)',
    padding: '96px 32px',
    position: 'relative', overflow: 'hidden'
  },
  inner: { maxWidth: 1200, margin: '0 auto', position: 'relative' },
  eyebrow: {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.20em', textTransform: 'uppercase',
    color: 'var(--marina-300)', marginBottom: 14
  },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, lineHeight: 1.1,
    letterSpacing: '-0.012em', color: 'var(--paper)', margin: 0, maxWidth: '20ch'
  },
  steps: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48,
    marginTop: 72, position: 'relative'
  },
  line: {
    position: 'absolute', top: 18, left: '8%', right: '8%',
    height: 1, background: 'rgba(217, 230, 240, 0.20)',
    zIndex: 0
  },
  step: { position: 'relative', zIndex: 1 },
  numWrap: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 },
  num: {
    width: 38, height: 38, borderRadius: 999,
    background: 'var(--marina-700)',
    border: '1px solid var(--marina-400)',
    color: 'var(--paper)',
    fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500,
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  numLabel: {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.20em', textTransform: 'uppercase',
    color: 'var(--marina-300)'
  },
  stepTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, lineHeight: 1.2,
    color: 'var(--paper)', margin: '0 0 12px 0'
  },
  stepCopy: {
    fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.65,
    color: 'var(--marina-200)', margin: 0
  }
};

const steps = [
{ num: '01', label: 'Sopralluogo', title: 'Misuriamo sul posto', copy: "Visita gratuita al terreno o al fabbricato. Si raccolgono dati, misure, vincoli e si concorda il perimetro della pratica." },
{ num: '02', label: 'Pratica', title: 'Redigiamo i documenti', copy: 'Stesura della scrittura, perizia o pratica catastale, con verifica incrociata su P.R.G., visure e atti notarili.' },
{ num: '03', label: 'Rogito', title: 'Accompagniamo alla firma', copy: "Coordinamento con il Notaio fino alla stipula. Tutta la documentazione è pronta, controllata e in regola." }];


const ProcessStrip = () =>
<section style={processStyles.wrap}>
    <div style={processStyles.inner}>
      <div style={processStyles.eyebrow}>— Il Metodo</div>
      <h2 style={processStyles.h2}>Tre passaggi, una sola persona di riferimento.</h2>
      <div style={processStyles.steps}>
        <div style={{ ...processStyles.line, opacity: "0" }}></div>
        {steps.map((s) =>
      <div key={s.num} style={processStyles.step}>
            <div style={processStyles.numWrap}>
              <div style={processStyles.num}>{s.num}</div>
              <span style={processStyles.numLabel}>{s.label}</span>
            </div>
            <h3 style={processStyles.stepTitle}>{s.title}</h3>
            <p style={processStyles.stepCopy}>{s.copy}</p>
          </div>
      )}
      </div>
    </div>
  </section>;


window.ProcessStrip = ProcessStrip;