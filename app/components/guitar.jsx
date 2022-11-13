import { Link } from '@remix-run/react';



function Guitar({ guitar }) {
    const { name, description, image, price, url } = guitar;
    const medium_img_url = image.data.attributes.formats.small.url;
    return (
        <div className="guitar">
            <img className="guitar__img" src={medium_img_url} alt={`imagen guitarra ${name}`} />
            <div className="guitar__texts">
                <h3 className="guitar__title">{name}</h3>
                <p className="guitar__description">{description}</p>
                <p className="guitar__price">${price}</p>
                <Link className="guitar__cta" to={`/guitars/${url}`}>
                    Ver producto
                </Link>
            </div>
        </div>
    )
}

export default Guitar