const bookingStyles = {
  wrap: { background: 'var(--paper)', padding: '96px 32px' },
  inner: {
    maxWidth: 1100, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64,
  },
  intro: { display: 'flex', flexDirection: 'column', gap: 28 },
  eyebrow: {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.20em', textTransform: 'uppercase',
    color: 'var(--marina-500)',
  },
  portraitCard: {
    background: 'var(--paper-pure)',
    border: '1px solid var(--ink-line)',
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: '0 18px 38px -22px rgba(14,42,71,0.20), 0 1px 2px rgba(14,42,71,0.04)',
    position: 'relative',
  },
  portraitImg: {
    width: '100%', height: 360, objectFit: 'cover', objectPosition: 'center 28%',
    display: 'block',
    filter: 'saturate(0.92) contrast(1.02)',
  },
  portraitStampLabel: {
    position: 'absolute', top: 16, left: 18,
    fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--paper-pure)',
    textShadow: '0 1px 8px rgba(14,42,71,0.55)',
  },
  portraitMeta: {
    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
    gap: 16, padding: '18px 22px 20px',
    borderTop: '1px solid var(--ink-line)',
  },
  portraitName: {
    fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500,
    color: 'var(--marina-900)', lineHeight: 1.15,
  },
  portraitRole: {
    fontFamily: 'var(--font-sans)', fontSize: 12,
    color: 'var(--ink-soft)', letterSpacing: '0.04em', marginTop: 4,
  },
  portraitAlbo: {
    fontFamily: 'var(--font-mono)', fontSize: 11,
    color: 'var(--marina-700)', textAlign: 'right', lineHeight: 1.45,
  },
  portraitAlboLabel: {
    fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 600,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: 'var(--ink-soft)', marginBottom: 2,
  },
  h2: {
    fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, lineHeight: 1.1,
    letterSpacing: '-0.012em', color: 'var(--marina-900)', margin: 0,
  },
  copy: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.7, color: 'var(--ink-body)', margin: 0 },
  contactList: { display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 14, borderTop: '1px solid var(--ink-line)' },
  contactItem: { display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-strong)' },
  contactIcon: { color: 'var(--marina-700)' },
  form: {
    background: 'var(--paper-pure)', border: '1px solid var(--ink-line)',
    borderRadius: 8, padding: 36,
    display: 'flex', flexDirection: 'column', gap: 18,
  },
  formTitle: {
    fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--marina-900)', fontWeight: 500,
    margin: '0 0 4px 0', paddingBottom: 16, borderBottom: '1px solid var(--ink-line)',
  },
  field: { display: 'flex', flexDirection: 'column', gap: 7 },
  fieldRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 },
  label: {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    color: 'var(--ink-strong)',
  },
  input: {
    fontFamily: 'var(--font-sans)', fontSize: 15, padding: '11px 14px',
    background: 'var(--paper-pure)', border: '1px solid var(--ink-line)',
    borderRadius: 4, color: 'var(--ink-strong)', outline: 'none',
    transition: 'border-color 220ms, box-shadow 220ms',
  },
  textarea: { minHeight: 110, resize: 'vertical', lineHeight: 1.5, fontFamily: 'var(--font-sans)' },
  select: {
    fontFamily: 'var(--font-sans)', fontSize: 15, padding: '11px 14px',
    background: 'var(--paper-pure)', border: '1px solid var(--ink-line)',
    borderRadius: 4, color: 'var(--ink-strong)', outline: 'none', cursor: 'pointer',
  },
  submit: {
    fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500,
    padding: '14px 24px', borderRadius: 4, border: 'none',
    background: 'var(--marina-700)', color: 'white', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    marginTop: 8,
  },
  hint: { fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--ink-soft)', marginTop: 4 },
  success: {
    background: 'var(--paper-pure)', border: '1px solid var(--marina-200)',
    borderRadius: 8, padding: '56px 40px', textAlign: 'center',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
  },
  checkBadge: {
    width: 56, height: 56, borderRadius: 999,
    background: 'var(--marina-050)', color: 'var(--marina-700)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1px solid var(--marina-200)',
  },
  successTitle: { fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--marina-900)', fontWeight: 500, margin: 0 },
  successCopy: { fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-body)', margin: 0, maxWidth: '40ch' },
  reset: {
    fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
    color: 'var(--marina-700)', background: 'transparent', border: 'none',
    cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3,
    padding: '4px 8px',
  },
  errorMsg: {
    fontFamily: 'var(--font-sans)', fontSize: 13, color: '#c0392b',
    background: '#fdf0ef', border: '1px solid #f5c6c2',
    borderRadius: 4, padding: '10px 14px',
  },
};

const BookingForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [focused, setFocused] = React.useState(null);
  const onFocus = (n) => () => setFocused(n);
  const onBlur = () => setFocused(null);
  const inputStyle = (n) => focused === n
    ? { ...bookingStyles.input, borderColor: 'var(--marina-700)', boxShadow: '0 0 0 3px rgba(24,72,120,0.12)' }
    : bookingStyles.input;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    const data = new FormData(e.target);
    try {
      const res = await fetch('https://formspree.io/f/xjgzkqzz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json();
        setError((json.errors && json.errors.map(e => e.message).join(', ')) || 'Errore nell\'invio. Riprovi.');
      }
    } catch (err) {
      setError('Errore di rete. Controlla la connessione e riprova.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section style={bookingStyles.wrap}>
        <div style={{ ...bookingStyles.inner, gridTemplateColumns: '1fr', maxWidth: 700 }}>
          <div style={bookingStyles.success}>
            <div style={bookingStyles.checkBadge}>
              <PgIcon name="check" style={{width:24, height:24, strokeWidth: 1.75}}/>
            </div>
            <h3 style={bookingStyles.successTitle}>Richiesta ricevuta.</h3>
            <p style={bookingStyles.successCopy}>
              Lo studio Le scriverà entro 24 ore per concordare la data
              del sopralluogo. Per urgenze può comunque telefonare al
              numero in fondo alla pagina.
            </p>
            <button style={bookingStyles.reset} onClick={() => setSubmitted(false)}>
              Invia un'altra richiesta
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={bookingStyles.wrap}>
      <div style={bookingStyles.inner}>
        <div style={bookingStyles.intro}>
          <span style={bookingStyles.eyebrow}>— Contatti</span>
          <h2 style={bookingStyles.h2}>Prenota un sopralluogo.</h2>
          <p style={bookingStyles.copy}>
            Ogni pratica viene seguita personalmente dal Geom. Paganotti,
            dal primo sopralluogo fino alla firma del rogito.
            Compili il modulo: lo studio risponderà entro 24 ore lavorative.
          </p>
          <div style={bookingStyles.portraitCard}>
            <span style={bookingStyles.portraitStampLabel}>Il Titolare</span>
            <img src={(window.__resources && window.__resources.fotoLuciano) || "assets/foto-luciano.jpg"} alt="Geom. Luciano Paganotti" style={bookingStyles.portraitImg}/>
            <div style={bookingStyles.portraitMeta}>
              <div>
                <div style={bookingStyles.portraitName}>Geom. Luciano Paganotti</div>
                <div style={bookingStyles.portraitRole}>Titolare dello Studio</div>
              </div>
              <div>
                <div style={bookingStyles.portraitAlboLabel}>Ghemme (NO)</div>
                <div style={bookingStyles.portraitAlbo}>Via Roma 30</div>
              </div>
            </div>
          </div>
          <div style={bookingStyles.contactList}>
            <div style={bookingStyles.contactItem}>
              <PgIcon name="mapPin" style={bookingStyles.contactIcon} />
              Via Roma 30 · 28074 Ghemme (NO)
            </div>
            <div style={bookingStyles.contactItem}>
              <PgIcon name="phone" style={bookingStyles.contactIcon} />
              <span style={{fontFamily: 'var(--font-mono)'}}>+39 0163841357</span>
            </div>
            <div style={bookingStyles.contactItem}>
              <PgIcon name="mail" style={bookingStyles.contactIcon} />
              <span style={{fontFamily: 'var(--font-mono)'}}>ufficio@studiopaganotti.com</span>
            </div>
            <div style={bookingStyles.contactItem}>
              <PgIcon name="clock" style={bookingStyles.contactIcon} />
              Lun – Ven · 8.00 – 12.30 · 13.00 – 17.30
            </div>
          </div>
        </div>
        <form style={bookingStyles.form} onSubmit={handleSubmit}>
          <h3 style={bookingStyles.formTitle}>Richiesta sopralluogo</h3>
          <div style={bookingStyles.fieldRow}>
            <div style={bookingStyles.field}>
              <label style={bookingStyles.label}>Cognome</label>
              <input name="cognome" style={inputStyle('cog')} onFocus={onFocus('cog')} onBlur={onBlur} placeholder="ROSSI" />
            </div>
            <div style={bookingStyles.field}>
              <label style={bookingStyles.label}>Nome</label>
              <input name="nome" style={inputStyle('nom')} onFocus={onFocus('nom')} onBlur={onBlur} placeholder="Mario" />
            </div>
          </div>
          <div style={bookingStyles.fieldRow}>
            <div style={bookingStyles.field}>
              <label style={bookingStyles.label}>Telefono</label>
              <input name="telefono" style={{...inputStyle('tel'), fontFamily:'var(--font-mono)'}} onFocus={onFocus('tel')} onBlur={onBlur} placeholder="+39 ..." />
            </div>
            <div style={bookingStyles.field}>
              <label style={bookingStyles.label}>Email</label>
              <input name="email" type="email" style={{...inputStyle('email'), fontFamily:'var(--font-mono)'}} onFocus={onFocus('email')} onBlur={onBlur} placeholder="mario.rossi@email.it" />
            </div>
          </div>
          <div style={bookingStyles.field}>
            <label style={bookingStyles.label}>Tipo di pratica</label>
            <select name="pratica" style={bookingStyles.select} defaultValue="preliminare">
              <option value="catasto">Catasto (visura · voltura · accatastamento)</option>
              <option value="preliminare">Preliminare di compravendita</option>
              <option value="perizia">Perizia o stima</option>
              <option value="prg">Urbanistica · P.R.G. · C.D.U.</option>
              <option value="altro">Altro (mi descriverà nel messaggio)</option>
            </select>
          </div>
          <div style={bookingStyles.field}>
            <label style={bookingStyles.label}>Comune del terreno o fabbricato</label>
            <input name="comune" style={inputStyle('com')} onFocus={onFocus('com')} onBlur={onBlur} placeholder="Ghemme (NO)" />
          </div>
          <div style={bookingStyles.field}>
            <label style={bookingStyles.label}>Note</label>
            <textarea name="note" style={{...inputStyle('note'), ...bookingStyles.textarea}} onFocus={onFocus('note')} onBlur={onBlur} placeholder="Descriva brevemente la sua richiesta..."/>
          </div>
          {error && <p style={bookingStyles.errorMsg}>{error}</p>}
          <button type="submit" style={{...bookingStyles.submit, opacity: sending ? 0.7 : 1}} disabled={sending}>
            {sending ? 'Invio in corso…' : <React.Fragment>Invia richiesta <PgIcon name="arrowRight" /></React.Fragment>}
          </button>
          <p style={bookingStyles.hint}>
            I dati sono trattati ai sensi del Reg. UE 2016/679 (GDPR) e
            verranno utilizzati esclusivamente per dare seguito alla
            richiesta.
          </p>
        </form>
      </div>
    </section>
  );
};

window.BookingForm = BookingForm;
