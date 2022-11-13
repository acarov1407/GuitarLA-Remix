import {useLoaderData} from '@remix-run/react';
import { getGuitars } from "~/models/guitar.server";
import stylesShop from '../styles/shop/shop.css';
import GuitarList from '~/components/guitarList';


export function meta(){
    return {
        title: 'GuitarLA - Tienda de Guitarras',
        description: 'GuitarLA - Nuestra colección de guitarras'
    }
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: stylesShop
        }
    ]
}


export async function loader(){
    const guitars = await getGuitars();
    return guitars.data;
}


function Shop() {

    const guitars = useLoaderData();

  return (
    <main className="shop container">
        <GuitarList 
        guitars={guitars}
        />
    </main>
  )
}

export default Shop