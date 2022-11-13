import { useState } from 'react';
import { getGuitar } from '~/models/guitar.server';
import { useLoaderData, useOutletContext } from '@remix-run/react';
import stylesGuitar from '~/styles/shop/guitar.css';
import Alert from '~/components/alert';

export async function loader({ params }) {
  const { guitarURL } = params;
  const guitar = await getGuitar(guitarURL);

  if (guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }

  return guitar.data[0];
}

export function meta({ data }) {

  if (!data) {
    return {
      title: 'GuitarLA - Guitarra No Encontrada',
      description: 'Venta de guitarras, guitarra no encontrada'
    }
  }

  return {
    title: `GuitarLA - ${data.attributes.name}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.attributes.name}`
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitar
    }
  ]
}



function Guitar() {

  const {addToCart} = useOutletContext();
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(0);
  const guitar = useLoaderData();
  const { name, description, price, image } = guitar.attributes;

  function handleSubmit(e) {
    e.preventDefault();

    if (amount < 1) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    setError(false);

    const selected_guitar = {
      id: guitar.id,
      name,
      price,
      amount,
      image: image.data.attributes.formats.medium.url,

    };

    addToCart(selected_guitar);

  }

  return (
    <main className="guitar">
      <div className="guitar__content container">
        <img src={image.data.attributes.formats.medium.url} alt={`guitarra ${name}`} className="guitar__img" />
        <div className="guitar__texts">
          <h2 className="guitar__title">{name}</h2>
          <p className="guitar__description">
            {description}
          </p>
          <p className="guitar__price">${price}</p>
          <form onSubmit={handleSubmit} className="guitar__form">
            <div className="field">
              <label htmlFor="amount" className="guitar__form-label">Cantidad</label>
              <select name="amount" id="amount"
                className="guitar__form-select" onChange={(e) => setAmount(parseInt(e.target.value))}>
                <option value="0">-- Seleccione --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <input type="submit" value="Agregar al carrito" className="guitar__form-submit" />
          </form>
          {
            error && <Alert msg='Debes seleccionar una cantidad válida!' />
          }

        </div>
      </div>
    </main>
  )
}

export default Guitar