import { useLoaderData } from '@remix-run/react';
import { getBlogs } from '~/models/blog.server';
import BlogList from '~/components/blogList';

export async function loader() {
    const blogs = await getBlogs();
    return blogs.data;
}

export function meta(){
    return {
        title: 'GuitarLA - Blog',
        description: 'Blog, entradas de blogs'
    }
}



function Blog() {

    const blogs = useLoaderData();

    return (
        <>
            <BlogList blogs={blogs} />
        </>
    )
}

export default Blog