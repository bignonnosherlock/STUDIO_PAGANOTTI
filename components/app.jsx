const App = () => {
  const [route, setRoute] = React.useState('home');
  const onNav = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); };

  let page;
  if (route === 'home') {
    page = (
      <>
        <Hero onNav={onNav} />
        <ServicesGrid onNav={onNav} />
        <ProcessStrip />
        <AboutBlock />
        <CTACard onNav={onNav} />
      </>
    );
  } else if (route === 'servizi') {
    page = <ServicesPage onNav={onNav} />;
  } else if (route === 'studio') {
    page = <StudioPage onNav={onNav} />;
  } else {
    page = <BookingForm />;
  }

  return (
    <>
      <Header route={route} onNav={onNav} />
      <main>{page}</main>
      <Footer onNav={onNav} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
