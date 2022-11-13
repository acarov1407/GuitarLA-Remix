import { Outlet } from '@remix-run/react';
import stylesBlog from '~/styles/blog/blog.css';
import stylesBlogCard from '~/styles/blog/blogCard.css';


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesBlog
        },
        {
            rel: 'stylesheet',
            href: stylesBlogCard
        }
    ]
}

function Blog() {

    return (
        <main className='blog'>
            <Outlet />
        </main>
    )
}

export default Blog