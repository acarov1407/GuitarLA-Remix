

function Course({ course }) {

    const { attributes: { title, content, image } } = course;

    return (
        <section className="course">
            <style jsx="true">
                {
                    `
                .course{
                    background-image: linear-gradient(to right, rgb(0 0 0 /.65), rgb(0 0 0 /.7)), url(${image.data.attributes.url})
                }
                `
                }
            </style>
            <div className="course__content container">
                <div className="course__texts">
                    <h2 className="course__heading">{title}</h2>
                    <p className="course__paragraph">
                        {content}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Course