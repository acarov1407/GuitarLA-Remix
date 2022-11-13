import { useState, useEffect } from 'react';
import {
    Meta,
    Links,
    Link,
    Outlet,
    Scripts,
    LiveReload,
    useCatch
} from '@remix-run/react';

import stylesIndex from './styles/index/index.css';
import stylesNav from './styles/index/nav.css';
import stylesHeader from './styles/index/header.css';
import stylesFooter from './styles/index/footer.css';
import normalize from './styles/index/normalize.css';
import Header from './components/header';
import Footer from './components/footer';

export function meta() {
    return (
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: "width=device-width,initial-scale=1"
        }
    )
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: normalize
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: stylesIndex
        },
        {
            rel: 'stylesheet',
            href: stylesNav
        },
        {
            rel: 'stylesheet',
            href: stylesHeader
        },
        {
            rel: 'stylesheet',
            href: stylesFooter
        }
    ]
}

function App() {

    const cart_ls = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : null;
    const [cart, setCart] = useState(cart_ls);

    useEffect(() =>{
        //Agregar a localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    function addToCart(guitar) {

        if (cart.some(_guitar => _guitar.id === guitar.id)) {
            const updated_cart = cart.map(_guitar => _guitar.id === guitar.id ? guitar : _guitar);
            setCart(updated_cart)
        } else {
            setCart([...cart, guitar]);
        }
    }

    function updateAmount(id, amount){
        const updated_cart = cart.map(_guitar => {
            if(_guitar.id === id) _guitar.amount = amount;
            return _guitar;   
        });
        setCart(updated_cart);
    }

    function deleteFromCart(id){
        //Borrar item del carrito de compras
        const updated_cart = cart.filter(_item => _item.id !== id);
        setCart(updated_cart);
    }

    return (
        <Document>
            <Outlet
                context={
                    {
                        addToCart,
                        cart,
                        updateAmount,
                        deleteFromCart
                    }
                }
            />
        </Document>

    )
}

export default App;

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
                <title>Document</title>
            </head>
            <body>
                <Header />
                {children}


                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/* Manejo de errores */
export function CatchBoundary() {
    const error = useCatch();
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error__link" to="/">Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )
}

export function ErrorBoundary({ error }) {

    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error__link" to="/">Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )
}