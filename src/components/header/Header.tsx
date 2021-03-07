import "./Header.scss";

const Header = (props: any) => {
  const {hover, mouseX, mouseY, isHover} = props

  const handlerScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };


  return (
    <header className="header-container">
      <div>EXPE</div>
      <nav className="header-container__elements">
        <div className="header-container__elements_option" onMouseOver={() => hover("link")} onMouseOut={() => hover(null)} onClick={() => handlerScroll("#phasesSection")}>FRASES</div>
        <div className="header-container__elements_option" onMouseOver={() => hover("link")} onMouseOut={() => hover(null)} onClick={() => handlerScroll("#matesSection")}>COMPAÑERAS</div>
      </nav>
    </header>
  );
};

export default Header;
