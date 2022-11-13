import { useState, useEffect } from 'react';
import { useOutletContext } from '@remix-run/react';
import { calculateSubtotal } from '~/utils/helpers';
import { ClientOnly } from 'remix-utils';
import stylesCart from '../styles/cart/cart.css';


export function meta() {
    return {
        title: 'GuitarLA - Carrito de Compras',
        description: 'Venta de guitarras, música, blog, carrito de compras'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesCart
        }
    ]
}
function Cart() {

    const [total, setTotal] = useState(0);
    const { cart, updateAmount, deleteFromCart } = useOutletContext();

    useEffect(() => {
        const calculateTotal = cart.reduce((_total, _item) => _total + (_item.amount * _item.price), 0)
        setTotal(calculateTotal);


    }, [cart]);


    return (
        <ClientOnly fallback={'Cargando...'}>
            { () => (
            <main className='cart'>
                <h1 className="cart__heading">Carrito de Compras</h1>
                <div className="cart__content">

                    <div className="articles">
                        <h2 className="articles__title">Articulos</h2>
                        {
                            cart?.length === 0 ? 'Carrito Vacío' : (
                                cart?.map(item => (
                                    <div key={item.id} className="product">
                                        <div className="product__content">
                                            <div>
                                                <img className="product__img" src={item.image} alt={`imagen guitarra ${item.name}`} />
                                            </div>

                                            <div>
                                                <p className='product__name'>{item.name}</p>
                                                <label htmlFor="product-amount" className='product__amount'>Cantidad:</label>
                                                <select name="product-amount" id="product-amount"
                                                    value={item.amount} onChange={e => updateAmount(item.id, parseInt(e.target.value))}
                                                    className="product__amount-select">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                                <p className='product__price'>$ <span>{item.price}</span></p>
                                                <p className='product__subtotal'>Subtotal: $ <span>{calculateSubtotal(item.amount, item.price)}</span></p>
                                            </div>
                                        </div>
                                        <button type="button" className="product__closebtn" onClick={() => deleteFromCart(item.id)}>X</button>
                                    </div>
                                ))
                            )
                        }
                    </div>
                    <aside className="summary">
                        <h3 className="summary__title">Resumen del Pedido</h3>
                        <p className="summary__total">Total a pagar: $ <span>{total}</span></p>
                    </aside>
                </div>


            </main>
)}
        </ClientOnly>

    )
}

export default Cart