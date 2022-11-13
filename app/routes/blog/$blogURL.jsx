import { useLoaderData } from '@remix-run/react';
import { getBlog } from '~/models/blog.server';
import ScrollTop from '~/components/scrollTop';
import { formatDate } from '~/utils/helpers';


export async function loader({ params }) {
    const { blogURL } = params;
    const blog = await getBlog(blogURL);

    if (blog.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Blog no encontrado'
        })
    }

    return blog.data[0].attributes;
}

export function meta({ data }) {
    if (!data) {
        return {
            title: 'GuitarLA - Blog no encontrado',
            description: 'Blog, blog no encontrado'
        }
    }

    return {
        title: `GuitarLA - ${data.title}`,
        description: `Blog, ${data.title}`
    }
}


function Blog() {

    const blog = useLoaderData();
    const { title, content, image, publishedAt } = blog;

    return (

        <article className="blogCard blogCard--entry-view">
            <img src={image.data.attributes.formats.medium.url} alt={`imagen blog ${title}`} className="blogCard__img" />
            <div className="blogCard__texts">
                <h3 className="blogCard__title">{title}</h3>
                <p className="blogCard__date">{formatDate(publishedAt)}</p>
                <p className="blogCard__content">{content}</p>
            </div>
            <ScrollTop />
        </article>


    )
}

export default Blog