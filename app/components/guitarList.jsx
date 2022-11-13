import Guitar from "./guitar";

function GuitarList({guitars}) {
    return (
        <>
            <h2 className="shop__heading">Nuestra Colección</h2>
            {
                guitars.length && (
                    <div className="shop__content">
                        {
                            guitars.map(guitar => (
                                <Guitar
                                    key={guitar?.id}
                                    guitar={guitar?.attributes}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default GuitarList