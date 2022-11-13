import Nav from "./nav"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__content container">
            <Nav />
            <p className="footer__copyright">
                Todos los derechos reservados 2022
            </p>
        </div>
    </footer>
  )
}

export default Footer