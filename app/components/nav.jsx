import {Link, useLocation} from '@remix-run/react';

function Nav() {

    const location = useLocation();

  return (
    <nav className="nav">
                    <Link
                        className={`${location.pathname === '/' ? 'active' : ''} nav__link`}
                        to="/"
                    >
                        Inicio
                    </Link>

                    <Link
                       className={`${location.pathname === '/about' ? 'active' : ''} nav__link`}
                        to="/about"
                    >
                        Nosotros
                    </Link>

                    <Link
                        className={`${location.pathname === '/shop' ? 'active' : ''} nav__link`}
                        to="/shop"
                    >
                        Tienda
                    </Link>

                    <Link
                        className={`${location.pathname === '/blog' ? 'active' : ''} nav__link`}
                        to="/blog"
                    >
                        Blog
                    </Link>

                    <Link
                        className={`${location.pathname === '/cart' ? 'active-cart' : ''} nav__link-cart`}
                        to="/cart"
                    >
                    </Link>
                </nav>
  )
}

export default Nav